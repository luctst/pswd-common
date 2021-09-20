const { Schema } = require('mongoose');
const { randomFillSync } = require("crypto");

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
    isRootAdmin: {
        type: Boolean,
        default() {
            if (this.mail) return true;
            return false;
        }
    },
    teamId: {
        type: Schema.Types.ObjectId,
        required() {
            if (!this.isRootAdmin) return true;
            return false;
        }
    }
}, {
    timestamps: true,
});

module.exports = UsersSchema