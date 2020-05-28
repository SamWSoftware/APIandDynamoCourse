const responseGenerator = (statusCode = 400, data = {}) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
        },
        statusCode,
        body: JSON.stringify(data),
    };
};

const responses = {
    _200: data => {
        return responseGenerator(200, data);
    },
    _204: data => {
        return responseGenerator(204, data);
    },
    _400: data => {
        return responseGenerator(400, data);
    },
};

module.exports = responses;
