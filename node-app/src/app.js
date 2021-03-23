const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
const cors = require("cors");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

var corsOptions = {
    origin: "http://localhost:4200"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
console.log(__dirname);
// specify the mount path for the static directory `/dist`
app.use("/", express.static("dist"));

const postRouter = require("./routes/post");
const recentPostsRouter = require("./routes/posts");
const getPostByTagRouter = require("./routes/get-post-by-tag");

// use express routes
app.use("/", postRouter);
app.use("/", recentPostsRouter);
app.use("/", getPostByTagRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

// Netlify Lambda functions (future work)
// app.use("/.netlify/functions/app", router);

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});

module.exports.handler = serverless(app);