const fs = require("fs").promises;
const path = require("path");

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: { msg: "Hello World!" }
    };
};