const fsp = require("fs").promises;
const path = require("path");
const dir = "./functions";
const file = "./blog.json";
const resolved = process.env.LAMBDA_TASK_ROOT ? path.resolve(process.env.LAMBDA_TASK_ROOT, file) : path.resolve(__dirname, file);

exports.handler = async (event, context) => {
    try {
        const f = await fsp.readFile(`${dir}${resolved}`, { encoding: "utf8" });
        //f = f.toString();
        console.log(f);
        return {
            statusCode: 200,
            body: JSON.stringify({ f: JSON.parse(f)})
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: e
        };
    }
};