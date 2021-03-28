const express = require("express");
const router = express.Router();
const fs = require("fs");
// if you change the project structure make sure to update `dir` and `assetsDir`
const dir = __dirname.slice(0, 46) + "blog-client/src/app/pages";
const assetsDir = "./node-app/dist/assets";
const fileReader = require("./_helpers/file-reader");
const slugify = require("./_helpers/slugify");

router.get("/blog/:post", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { params } = req;
    const postSlug = params.post;

    fs.readdir("./dist/blog-client/app/pages", "utf8", (err, files) => {
        if (err) {
            console.error(err);
        }
        let metadata;
        fileReader(files).then(data => {
            let fileArr = [];
            files.forEach((f, i) => {
                let fileObj = {
                    file: f,
                    content: data[i]
                }
                fileArr.push(fileObj);
            });
            if (fileArr.length === 0) {
                res.status(400).json({ status: "FAILED", message: "Unable to read filse." });
            } else {
                fs.readFile(`./dist/blog-client/assets/blog.json`, "utf8", (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    metadata = JSON.parse(data);
                    // if each read file has a corresponding metadata object
                    if (metadata.length === fileArr.length) {
                        for (var i = 0; i < metadata.length; i++) {
                            fileArr.map(f => {
                                if (f.file === metadata[i].template) {
                                    f.slug = slugify(metadata[i].title);
                                }
                            });
                        }
                        // grab the specific post
                        const post = fileArr.filter(f => {
                            return f.slug == postSlug;
                        });
                        // if the post exists
                        if (post[0]) {
                            // find corresponding metadata for post
                            const postMetaData = metadata.filter(f => {
                                return slugify(f.title) == post[0].slug;
                            });
                            res.status(200).json({ post: post[0], metadata: postMetaData[0] });
                        } else {
                            res.json({ status: "FAILED", message: "That post slug doesn't exist." });
                        }
                    } else {
                        alert("Don't forget to update `blog.json` when you add new articles to the `/pages` directory.");
                    }
                });
            } 
        })
        .catch(err => {
            res.status(400).json({ status: "FAILED", message: "Failed to read files.", err: err });
        });
    });
});

module.exports = router;