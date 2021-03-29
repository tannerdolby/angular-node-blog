const fs = require("fs").promises;
const path = require("path");
const fetch = require("node-fetch");

exports.handler = async (event, context) => {
    let str = "blah";
    return {
        statusCode: 200,
        body: JSON.stringify({ msg: "hey"})
    };
};