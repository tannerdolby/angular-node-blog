const express = require("express");
const router = express.Router();
const fs = require("fs");
const assetsDir = "./dist/assets";
const slugify = require("../_helpers/slugify");

router.get("/recent", (req, res) => {
    let metadata;
    fs.readFile(`${assetsDir}/blog.json`, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        metadata = JSON.parse(data);
        metadata.forEach(f => {
            f.slug = slugify(f.title);
            f.date = Date.parse(f.date);
        })
        const recent = metadata.sort((a, b) => a.date - b.date).slice(0, 3);
        res.status(200).json(recent);
    });
});

router.get("/blog", (req, res) => {
    fs.readFile(`${assetsDir}/blog.json`, "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        metadata = data;
        res.status(200).json(JSON.parse(data));
    });
});

module.exports = router;