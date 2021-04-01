const fetch = require("node-fetch");
const url = "https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/assets/blog.json";
const base64 = require("base-64");

function slugify(str) {
    let regex = new RegExp(/\W+/, 'gm');
    str.replace(regex, "");
    return str.toLowerCase().split(" ").join("-");
}

exports.handler = async (event, context) => {
    // Fetch the blog post metadata JSON file
    return fetch(url, { headers: {
        'Allow': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    }})
        .then(response => response.json())
        .then(json => {
            let blogData = JSON.parse(base64.decode(json.content));
            let data = blogData.map(d => {
                d.slug = slugify(d.title);
                return d;
            });
            return {
                statusCode: 200,
                body: JSON.stringify({ metadata: data })
            }
        })
        .catch(error => ({
            statusCode: 500,
            body: error
        }));
};