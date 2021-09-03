const { Schema } = require('mongoose');

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    description: {
        type: String,
        maxlength: 300
    },
    password: {
        type: String,
        required: true
    },
    cards: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Cards'
        }
    ]
});

module.exports = UsersSchema