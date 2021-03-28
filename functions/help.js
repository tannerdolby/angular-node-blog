exports.handler = async (event, context) => {
    const name = event.queryStringParameters.name || 'world';
    return {
        statusCode: 200,
        body: `Hello ${name}`
    };
};