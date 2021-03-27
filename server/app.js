const express = require("express");
const app = express();
const router = express.Router();
const cors = require("cors");
const path = require("path");
const port = process.env.PORT || 4000;
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

var corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// specify the mount path for the static directory `/dist`
app.use("/", express.static("dist"));

const postRouter = require("../node-app/src/routes/post");
const postsRouter = require("../node-app/src/routes/posts");
const getPostByTagRouter = require("../node-app/src/routes/get-post-by-tag");

// use express routes
app.use("/", postRouter);
app.use("/", postsRouter);
app.use("/", getPostByTagRouter);

router.get("/el", (req, res) => {
    console.log(path.join(__dirname, "../dist", "index.html"));
    res.sendFile("index.html", { root: "./dist" });
});

router.get("/test", (req, res) => {
    res.status(200).json({ message: "Test complete" });
});

// Netlify Lambda functions (future work)
app.use("/.netlify/functions/app", router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

module.exports.handler = serverless(app);