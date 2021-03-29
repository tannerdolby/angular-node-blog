const fsp = require("fs").promises;
const path = require("path");
const dir = "./functions";
const file = "./blog.json";
const resolved = process.env.LAMBDA_TASK_ROOT ? path.resolve(process.env.LAMBDA_TASK_ROOT, file) : path.resolve(__dirname, file);

exports.handler = async (event, context) => {
    try {
        const f = await fsp.readFile(`${dir}${resolved}`, "utf8");
        console.log(JSON.parse(f));
        return {
            statusCode: 200,
            body: JSON.stringify(JSON.parse(f))
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: e
        };
    }
};