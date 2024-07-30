"use strict";

import { S3 } from "@aws-sdk/client-s3";
import fetch from 'node-fetch';

const BUCKET_NAME = process.env.S3_BUCKET_NAME;
const S3_REGION = process.env.S3_REGION;
const ACCESS_KEY_ID = process.env.S3_ACCESS_KEY;
const SECRET_KEY = process.env.S3_SECRET_KEY;

const s3 = new S3({
    endpoint: `https://s3.${S3_REGION}.scw.cloud`,
    region: S3_REGION,
    credentials: {
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_KEY,
    },
});


const PROJECT_ID = process.env.PROJECT_ID;
const TOLGEE_API_KEY = process.env.TOLGEE_API_KEY;

const handle = async (event, context, cb) => {
    try {
        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*', // Replace with your allowed origins
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type'
                },
                body: ''
            };
        }


        if (event.httpMethod !== 'POST') {
            return {
                statusCode: 405,
                body: JSON.stringify({ error: 'Method Not Allowed' })
            };
        }

        // Extract the language from the event body (assuming JSON format)
        const body = JSON.parse(event.body);
        const language = body.language;

        if (!language) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Language not specified' })
            };
        }

        // Perform the API call to get translations
        const translationsUrl = `https://translate.climatefresk.org/v2/projects/${PROJECT_ID}/translations/${language}`;
        const translationsResponse = await fetch(translationsUrl, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-API-Key': TOLGEE_API_KEY
            }
        });

        if (!translationsResponse.ok) {
            return {
                statusCode: translationsResponse.status,
                body: JSON.stringify({ error: 'Failed to fetch translations ' })
            };
        }

        const translations = await translationsResponse.json();

        const bucketName = BUCKET_NAME;
        const objectKey = `locales/${language}.json`;

        // Upload the translations to the Scaleway bucket
        await s3.putObject({
            Bucket: bucketName,
            Key: objectKey,
            Body: JSON.stringify(translations[language]),
            ContentType: 'application/json'
        });

        // Return 200 status code if everything went well
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Translations successfully uploaded' })
        };

    } catch (error) {
        console.error('Error processing request', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' })
        };
    }
}

export { handle };


// This will execute when testing locally, but not when the function is launched
if (process.env.NODE_ENV === 'test') {
    import("@scaleway/serverless-functions").then(scw_fnc_node => {
        scw_fnc_node.serveHandler(handle, 8080);
    });
}