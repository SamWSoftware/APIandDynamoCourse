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
    get: async (ID, TableName) => {
        const params = {
            TableName,
            Key: {
                ID,
            },
        };

        const data = await documentClient
            .get(params)
            .promise()
            .catch(error => null);

        if (!data || !data.Item) {
            return null;
        }
        return data.Item;
    },
};

module.exports = Dynamo;
