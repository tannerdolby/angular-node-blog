const app = require("./node-app/src/app");
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});