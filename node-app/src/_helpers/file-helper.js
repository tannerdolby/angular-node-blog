const fs = require("fs");
let d = [];
let fileData = [];
let post = {};

// three steps, read files, store content, send data
function readFiles(dirName, fileHandler, handleErr) {
    let a = [];
    fs.readdir(dirName, (err, files) => {
        if (err) {
            console.error(err);
            handleErr(err);
            return; // bail
        }
        // iterate over array of file names
        files.forEach((fileName) => {
            // read each files contents
            fs.readFile(`${dirName}/${fileName}`, { encoding: "utf-8" }, (err, data) => {
                if (err) {
                    handleErr(err);
                    return; // bail
                }
                a.push(fileName);

                // callback for reading files
                fileHandler(fileName, data);
            });
        });
    });
};

module.exports = readFiles;