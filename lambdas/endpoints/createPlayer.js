const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    if (!event.body) {
        return Responses._400({ message: 'missing body on the request' });
    }

    try {
        const user = JSON.parse(event.body);

        const dbUser = await Dynamo.write(user, tableName);

        return Responses._200(dbUser);
    } catch (error) {
        console.log('error', error);

        return Responses._400({
            errorMessage: error.message || 'error writing the user to a table',
        });
    }
};
