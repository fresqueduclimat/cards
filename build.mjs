import { connect } from "@dagger.io/dagger"

// initialize Dagger client
connect(
    async (client) => {
        const source = client.host().directory(".", { exclude: ["node_modules/"] })
        const dist = await client.container().from("node:20")
            .withDirectory("/src", source)
            .withWorkdir("/src")
            .withExec(["npm", "install"])
            .withExec(["npm", "run", "build"])
            .withExec(["npm", "run", "afterBuild"])
            .directory("dist/")

        const scwAccessKey = client.setSecret("SCW_ACCESS_KEY", process.env.SCW_ACCESS_KEY)
        const scwSecretKey = client.setSecret("SCW_SECRET_KEY", process.env.SCW_SECRET_KEY)

        const functionZipContainer = await client.container()
            .from("debian")
            .withExec(["/bin/bash", "-c", "apt update"])
            .withExec(["/bin/bash", "-c", "apt upgrade"])
            .withExec(["/bin/bash", "-c", "apt-get install zip -y"])
            .withDirectory("/functions/locales", client.host().directory("scripts/locales"))
            .withExec(["/bin/bash", "-c", "mkdir /functions/build && zip -r /functions/build/locales.zip /functions/locales/"])

        const pulumiContainer = await client.container()
            .from("pulumi/pulumi-nodejs:3.76.0")
            .withExec(["/bin/bash", "-c", "pulumi plugin install resource scaleway --server github://api.github.com/lbrlabs"])
            .withSecretVariable("PULUMI_ACCESS_TOKEN", client.setSecret("PULUMI_ACCESS_TOKEN", process.env.PULUMI_ACCESS_TOKEN))
            .withSecretVariable("SCW_ACCESS_KEY", scwAccessKey)
            .withSecretVariable("SCW_SECRET_KEY", scwSecretKey)
            .withSecretVariable("TOLGEE_API_KEY", client.setSecret("TOLGEE_API_KEY", process.env.TOLGEE_API_KEY))
            .withEnvVariable("SCW_DEFAULT_ORGANIZATION_ID", process.env.SCW_DEFAULT_ORGANIZATION_ID)
            .withEnvVariable("SCW_DEFAULT_PROJECT_ID", process.env.SCW_DEFAULT_PROJECT_ID)
            .withEnvVariable("SCW_DEFAULT_PROJECT_ID", process.env.SCW_DEFAULT_PROJECT_ID)
            .withDirectory("/pulumi/projects", client.host().directory("infra"))
            .withDirectory("/functions", functionZipContainer.directory("/functions/build"))

        const infraOutput = await pulumiContainer
            .withEnvVariable("CACHEBUSTER", Date.now().toString())
            .withExec(["/bin/bash", "-c", "npm i && pulumi stack select dev -c && pulumi up -y --skip-preview"]);
        const bucketName = await infraOutput
            .withExec(["/bin/bash", "-c", "pulumi stack output name -s dev"])
            .stdout()
            .then(x => x.trim());;
        const bucketEndpoint = await infraOutput
            .withExec(["/bin/bash", "-c", "pulumi stack output endpoint -s dev"])
            .stdout()
            .then(x => x.trim());;
        const functionUpdateDataEndpoint = await infraOutput
            .withExec(["/bin/bash", "-c", "pulumi stack output function -s dev"])
            .stdout()
            .then(x => x.trim());;

        const distUpdated = await client.container().from("node:20")
            .withDirectory("/dist", dist)
            .withWorkdir("/dist")
            .withExec(["sed", "-i", "s|UPDATE_DATA_ENDPOINT|https://" + functionUpdateDataEndpoint + "|g", "./index.html"])
            .directory("/dist/")

        const awsCliContainer = await client.container()
            .from("amazon/aws-cli")
            .withSecretVariable("AWS_ACCESS_KEY_ID", scwAccessKey)
            .withSecretVariable("AWS_SECRET_ACCESS_KEY", scwSecretKey)
            .withEnvVariable("AWS_DEFAULT_REGION", "fr-par")
            .withEnvVariable("S3_HOSTNAME", "s3.fr-par.scw.cloud")
            .withDirectory("/dist", distUpdated)
            .withExec(["--endpoint-url", "https://s3.fr-par.scw.cloud", "s3", "cp", "--recursive", "/dist", "s3://" + bucketName])
            .stdout();


        console.log('Access website on ' + bucketEndpoint);
    },
    { LogOutput: process.stdout }
)