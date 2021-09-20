module.exports = {
  back: {
    users: {
      projection: {
        __v: 0,
        password: 0,
        updatedAt: 0,
      },
    },
    mongoose: {
      fieldsFilters: ['sort', 'skip', 'limit', 'order'],
    },
    sessions: {
      populate: [
        { path: 'userId', select: 'name familyName mail' },
      ],
    },
  },
  front: {
    vueRouterParams: {
      teamId: 'teamId',
    },
  },
};
