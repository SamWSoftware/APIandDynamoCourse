const Responses = require('../common/API_Responses');

exports.handler = async event => {
    console.log('event = ', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        console.log('missing an ID');
        return Responses._400({});
    }

    const ID = event.pathParameters.ID;
    if (userData[ID]) {
        return Responses._200(userData[ID]);
    }

    return Responses._400({ message: 'no user found for that ID' });
};

const userData = {
    48923: { name: 'Josh Owens', age: 45, job: 'teacher' },
    83943: { name: 'Jess Smith', age: 24, job: 'journalist' },
    54223: { name: 'Tom Hague', age: 27, job: 'plasterer' },
};
