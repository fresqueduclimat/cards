"use strict";
const pulumi = require("@pulumi/pulumi");
const scaleway = require("@lbrlabs/pulumi-scaleway");
const crypto = require('crypto');
const fs = require('fs');

// Object storage
const bucket = new scaleway.ObjectBucket("fresqueduclimatcards");
const acl = new scaleway.ObjectBucketAcl("mainAcl", {
    bucket: bucket.name,
    acl: "private",
});
const policy = bucket.name.apply(name => new scaleway.ObjectBucketPolicy("mainObjectBucketPolicy", {
    bucket: bucket.name,
    policy: JSON.stringify({
        Version: "2012-10-17",
        Id: "MyBucketPolicy",
        Statement: [
            {
                Sid: "Delegate Access",
                Effect: "Allow",
                Principal: "*",
                Action: [
                    "s3:GetObject"
                ],
                Resource: [
                    name + "/*",
                ]
            }
        ],
    }),
}));
const websiteConfiguration = new scaleway.ObjectBucketWebsiteConfiguration("mainObjectBucketWebsiteConfiguration", {
    bucket: bucket.name,
    indexDocument: {
        suffix: "index.html",
    },
    errorDocument: {
        key: "index.html",
    },
});


// Serverless function

// compute the hash of the zip file to trigger
// a new deployment if the code change
const zipFilePath = '/functions/locales.zip';
var content = fs.readFileSync(zipFilePath);
var zipHash = crypto.createHash('md5').update(content).digest('hex');

// deploy objects to scaleway
const cardsNs = new scaleway.FunctionNamespace("cards", { description: "Cards function namespace" });
const localesF = new scaleway.Function("locales", {
    namespaceId: cardsNs.id,
    runtime: "node20",
    handler: "functions/locales/handler.handle",
    privacy: "public",
    deploy: true,
    zipFile: "/functions/locales.zip",
    zipHash: zipHash,
    secretEnvironmentVariables: {
        S3_SECRET_KEY: process.env.SCW_SECRET_KEY,
        TOLGEE_API_KEY: process.env.TOLGEE_API_KEY,
    },
    environmentVariables: {
        S3_REGION: bucket.region,
        S3_ACCESS_KEY: process.env.SCW_ACCESS_KEY,
        S3_BUCKET_NAME: bucket.name,
        PROJECT_ID: 7,
    },
});

// Export the name of the bucket.
exports.name = bucket.name;
exports.id = bucket.id;
exports.domain = websiteConfiguration.websiteDomain;
exports.endpoint = websiteConfiguration.websiteEndpoint;
exports.function = localesF.domainName;