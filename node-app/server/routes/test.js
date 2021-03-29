const fs = require("fs").promises;
const path = require("path");

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ msg: "Hello World!" })
    };
};