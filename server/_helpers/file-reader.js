const fsp = require("fs").promises;
const fs = require("fs");
const dir = __dirname.slice(0, 46) + "blog-client/src/app/pages";

function fileReader(fileNames) {
    return Promise.all(
        fileNames.map(file => { 
            return fsp.readFile(`${dir}/${file}`, "utf8")
        })
    );
}

module.exports = fileReader;