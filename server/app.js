const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 4000;
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const fs = require("fs");
const assetsDir = "./node-app/dist/assets";
const slugify = require("./_helpers/slugify");
// const env = require("/blog-client/app/src/environments/environment");

var corsOptions = {
    origin: "http://localhost:4200"
}

// console.log(env);
console.log(process.env.NODE_ENV);
console.log(process.env);

if (process.env.NODE_ENV == 'production') {
    app.use(cors({
        optionsSuccessStatus: 200,
        // (DEV) origin: `http://localhost:8888`
        origin: "https://modest-bhabha-3a9de8.netlify.app"
    }));
    app.options("*", cors());
}

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

router.get("/test", (req, res) => {
    res.status(200).json({ message: "Test complete" });
});

// Netlify Lambda function route
app.use("/.netlify/functions/app", router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

module.export = app;

module.exports.handler = serverless(app);