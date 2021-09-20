module.exports = {
  back: {
    users: {
      projection: {
        password: 0,
        __v: 0,
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
  common: {
    rights: {
      0: 'admin',
      1: 'write',
      2: 'read',
      3: 'writeAndRead',
    },
  },
  front: {
    vueRouterParams: {
      teamId: 'teamId',
    },
    vuexMutations: {
      populateProfile: 'POPULATE_PROFILE',
    },
  },
};
