const fetch = require("node-fetch");
//const resolved = process.env.LAMBDA_TASK_ROOT ? path.resolve(process.env.LAMBDA_TASK_ROOT, file) : path.resolve(__dirname, file);
const endpoint = "https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/pages";

exports.handler = async (event, context) => {
    // Fetch directory of page files from GitHub API
    return fetch(endpoint, { headers: { Accept: "application/json" } })
        .then((response) => response.json())
        .then((data) => ({
            statusCode: 200,
            body: JSON.stringify(data)
        }))
        .catch(error => ({ statusCode: 422, body: String(error) }))
};