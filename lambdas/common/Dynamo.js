const uuid = require('uuid').v4;
const AWS = require('aws-sdk');

const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {
    write: async (data, TableName) => {
        const Item = {
            ...data,
            ID: uuid(),
        };

        const params = {
            TableName,
            Item,
        };

        await documentClient.put(params).promise();

        return Item;
    },
};

module.exports = Dynamo;
