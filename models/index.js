const { model } = require('mongoose');

const sessionsSchema = require('./sessions');
const usersSchema = require('./users')

module.exports = {
    Sessions: model('Sessions', sessionsSchema),
    Users: model('Users', usersSchema),
}