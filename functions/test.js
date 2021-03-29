const fetch = require("node-fetch");
const url = "https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/assets/blog.json";
const base64 = require("base-64");

exports.handler = async (event, context) => {
    // Fetch the blog post metadata JSON file
    return fetch(url, { headers: {
        'Allow': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    }})
        .then(response => response.json())
        .then(json => ({
                statusCode: 200,
                body: JSON.stringify(ut8.decode(base64.decode(json.content)))
        }))
        // .then(json => ({
        //     statusCode: 200,
        //     body: JSON.stringify(json)
        // }))
        .catch(error => ({
            statusCode: 500,
            body: error
        }));
};