const { Schema } = require('mongoose');
const { randomFillSync } = require("crypto");

const { common } = require('../macros/index');

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        required() {
            if (this.isRootAdmin) return true;
            return false;
        }
    },
    gender: {
        type: Number,
        required: true,
        enum: Object.keys(common.gender),
    },
    mail: {
        type: String,
        required() {
            if (this.isRootAdmin) return true;
            return false;
        },
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        default() {
            return randomFillSync(Buffer.alloc(16)).toString('hex');
        }
    },
    newUser: {
        type: Boolean,
        default: true,
    },
    teamId: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Teams',
            },
        ],
    }
}, {
    timestamps: true,
});

module.exports = UsersSchema