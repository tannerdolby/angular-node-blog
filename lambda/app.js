const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

app.use(cors({
    optionsSuccessStatus: 200,
    origin: "http://localhost:9000"
}));
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// specify the mount path for the static directory `/dist`
app.use("/", express.static("dist"));

const postRouter = require("../node-app/server/routes/post");
const postsRouter = require("../node-app/server/routes/posts");
const getPostByTagRouter = require("../node-app/server/routes/get-post-by-tag");

// Set Netlify function routes for serverless
app.use("/.netlify/functions/app", postRouter);
app.use("/.netlify/functions/app", postsRouter);
app.use("/.netlify/functions/app", getPostByTagRouter);

router.get("/test", (req, res) => {
    res.status(200).json({ message: "Test complete" });
});

// Netlify Lambda function route
app.use("/.netlify/functions/app", router);

module.export = app;
module.exports.handler = serverless(app);