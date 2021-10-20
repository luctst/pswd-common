const { Schema } = require('mongoose');
const { randomFillSync } = require("crypto");
const passwordValidator = require('password-validator');

const { common } = require('../macros/index');

const UsersSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    familyName: {
        type: String,
        uppercase: true,
        required() {
            if (this.mail) return true;
            return false;
        }
    },
    gender: {
        type: Number,
        required: true,
        enum: Object.keys(common.gender).map(el => parseInt(el)),
    },
    age: {
        type: Number,
        min: 18,
        required() {
            return this.mail ? true : false;
        }
    },
    mail: {
        type: String,
        required() {
            if (this.mail) return true;
            return false;
        },
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    password: {
        type: String,
        required() {
            return this.mail ? true : false;
        },
        minlength: 8,
        default() {
            return randomFillSync(Buffer.alloc(16)).toString('hex');
        },
        validate: {
            validator(value) {
                const schema = new passwordValidator();

                schema
                .is().min(8)
                .is().max(100)           
                .has().uppercase(1)
                .has().lowercase(1)                  
                .has().not().spaces()

                return schema.validate(value);
            },
            message: () => 'Password must be minimum 8 lengths, 1 uppercase, 1 lowercase characters and no spaces'
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