const fsp = require("fs").promises;
const fs = require("fs");
const path = require("path");
const dir = "./functions";
const file = "./blog.json";
const resolved = process.env.LAMBDA_TASK_ROOT ? path.resolve(process.env.LAMBDA_TASK_ROOT, file) : path.resolve(__dirname, file);

exports.handler = async (event, context) => {
        try {
            const f = await fsp.readFile(`${dir}${resolved}`, { encoding: "utf8" });
            console.log(f);
            return {
                statusCode: 200,
                body: JSON.stringify({ some: "json"})
            }
        } catch (e) {
            return {
                statusCode: 500,
                body: e
            };
        }
};