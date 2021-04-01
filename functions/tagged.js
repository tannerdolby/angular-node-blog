const fetch = require("node-fetch");
const metadataUrl = "https://anodeblog/.netlify/functions/metadata";

exports.handler = async (event, context) => {
    const tag = event.queryStringParameters.tag || null;

    try {
        const files = await fetch(metadataUrl)
            .then(response => response.json())
            .then(json => json.data);

        const filtered = files.filter(f => {
            return f.tags.includes(tag);
        });

        return {
            statusCode: 200,
            body: JSON.stringify(filtered)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: String(err)
        }
    }

};