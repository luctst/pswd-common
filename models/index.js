const { model } = require('mongoose');

const sessionsSchema = require('./sessions');
const usersSchema = require('./users')
const teamsSchema = require('./teams');

module.exports = {
    Sessions: model('Sessions', sessionsSchema),
    Users: model('Users', usersSchema),
    Teams: model('Teams', teamsSchema)
}