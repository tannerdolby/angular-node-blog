const express = require("express");
const fs = require("fs");
const router = express.Router();
const assetsDir = "./node-app/dist/assets";

router.get("/blog/topics/:tag", (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const { params } = req;
    const tag = params.tag;
    let postData;
    fs.readFile(`./node-app/dist/assets/blog.json`, "utf8", (err, data) => {
        if (err) throw err;
        postData = JSON.parse(data).filter(p => {
            return p.tags.includes(`${tag}`);
        });
        if (postData.length != 0) {
            res.status(200).json(postData);
        } else {
            res.json({ status: "FAILED", message: `Unable to find posts with tag: ${tag}` });
        }
    });
});

module.exports = router;