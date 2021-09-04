module.exports = {
    back: {
        users: {
            projection: {
                password: 0,
                __v: 0
            }
        },
        mongoose: {
            fieldsFilters: ['sort', 'skip', 'limit', 'order']
        },
        sessions: {
            populate: [
                { path: 'userId', select: 'name familyName mail' }
            ]
        }
    },
};