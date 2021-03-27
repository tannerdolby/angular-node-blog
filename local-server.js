const port = process.env.PORT || 4000;
const app = require("./server/app");

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});