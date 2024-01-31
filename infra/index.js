"use strict";
const pulumi = require("@pulumi/pulumi");
const scaleway = require("@lbrlabs/pulumi-scaleway");

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


// Export the name of the bucket.
exports.name = bucket.name;
exports.id = bucket.id;
exports.domain = websiteConfiguration.websiteDomain;
exports.endpoint = websiteConfiguration.websiteEndpoint;
