"use strict";
const app = require("./node-app/server/app");
let port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});