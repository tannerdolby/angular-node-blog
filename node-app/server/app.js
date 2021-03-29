const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 4000;
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const fs = require("fs");
const fetch = require("node-fetch");
const assetsDir = "./node-app/dist/assets";
const slugify = require("./_helpers/slugify");
// const env = require("/blog-client/app/src/environments/environment");

app.use(cors({
    optionsSuccessStatus: 200,
    origin: "http://localhost:9000"
}));
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// specify the mount path for the static directory `/dist`
app.use("/", express.static("dist"));

const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const getPostByTagRouter = require("./routes/get-post-by-tag");

// Set Netlify function routes
app.use("/.netlify/functions/app", postRouter);
app.use("/.netlify/functions/app", postsRouter);
app.use("/.netlify/functions/app", getPostByTagRouter);

router.get("/test", async (req, res) => {
    fetch("https://api.github.com/repos/tannerdolby/angular-node-blog-template/contents/dist/blog-client/pages")
        .then(data => data.json())
        .then(json => {
            let f = json.forEach(f => {
                console.log(f.name);
            });
            return res.status(200).json(json)
        })
        .catch(err => console.log(err));
});

router.get("/blah", (req, res) => {
    fs.readFile("./dist/blog-client/assets/blog.json", (err, data) => {
        if (err) {
            console.log(err);
            //res.status(400).json({ error: err, msg: "FAILED" });
        }
        console.log(JSON.parse(data));
        res.status(200).json({ ya: JSON.parse(data) });
    });
})

// Netlify Lambda function route
// app.use("/.netlify/functions/app", router);
app.use("/", router);

module.exports = app;
module.exports.handler = serverless(app);