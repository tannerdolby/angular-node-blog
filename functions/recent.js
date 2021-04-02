const base64 = require("base-64");
const fetch = require("node-fetch");
const url = "https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/assets/blog.json";

function slugify(str) {
    let regex = new RegExp(/\W+/, 'gm');
    str.replace(regex, "");
    return str.toLowerCase().split(" ").join("-");
}

exports.handler = async (event, context) => {
    return fetch(url, { headers: {
        'Allow': 'application/json',
        'Accept': 'application/vnd.github.v3+json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    }})
        .then(response => response.json())
        .then(json => {
            let data = JSON.parse(base64.decode(json.content));
            data.map(d => {
                d.slug = slugify(d.title);
                d.time = Date.parse(d.date);
                return d;
            });
            // get the 3 most recent posts
            let recent = data.sort((a, b) => b.time - a.time).slice(0, 3);
            return {
                statusCode: 200,
                body: JSON.stringify({ metadata: recent })
            }

        })
        .catch(err => {
            return {
                statusCode: 500,
                body: err
            }
        });
};