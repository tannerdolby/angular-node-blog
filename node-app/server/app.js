const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(cors({
    optionsSuccessStatus: 200,
    origin: "http://localhost:4200"
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

// accessed at /.netlify/functions/app/test
router.get("/test", (req, res) => {
    res.json({ hey: "you" });
});

// Local Dev
//app.use("/", router);

// Netlify Lambda function route - for production
app.use("/.netlify/functions/app", router);

module.exports = app;
module.exports.handler = serverless(app);