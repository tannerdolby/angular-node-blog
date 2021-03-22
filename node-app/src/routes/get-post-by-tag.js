const express = require("express");
const fs = require("fs");
const router = express.Router();
const assetsDir = __dirname.slice(0, 46) + "blog-client/src/assets";

router.get("/blog/category/:tag", (req, res) => {
    const { params } = req;
    const tag = params.tag;
    let postData;
    fs.readFile(`${assetsDir}/blog.json`, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        postData = JSON.parse(data).filter(p => {
            return p.tags.includes(`${tag}`);
        });
        if (postData.length != 0) {
            res.json(postData);
        } else {
            res.json({ status: "FAILED", message: `Unable to find posts with tag: ${tag}` });
        }
    });
});

module.exports = router;