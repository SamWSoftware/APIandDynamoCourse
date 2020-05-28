const Responses = require('../common/API_Responses');
const Dynamo = require('../common/Dynamo');

const tableName = process.env.tableName;

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        console.log('missing an ID');
        return Responses._400({});
    }

    const ID = event.pathParameters.ID;

    try {
        const user = await Dynamo.get(ID, tableName);
        if (!user) {
            return Responses._204({ message: 'no player found for that ID' });
        }
        return Responses._200(user);
    } catch (error) {
        console.log('error', error);

        return Responses._400();
    }
};
