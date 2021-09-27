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
  common: {
    rights: {
      0: 'admin',
      1: 'write',
      2: 'read',
      3: 'writeAndRead',
    },
    gender: {
      0: 'female',
      1: 'male',
      2: 'non-binary',
    },
    cardsOrder: {
      0: 'Recent',
      1: 'A-Z',
      2: 'Z-A',
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
