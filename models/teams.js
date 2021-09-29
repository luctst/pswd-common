const { Schema } = require('mongoose');
const { common } = require('../macros/index');

const TeamsSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            set(value) {
                return value.split(' ').join('-').trim();
            }
        },
        members: {
            type: [
                {
                    memberData: {
                        type: Schema.Types.ObjectId,
                        ref: 'Users',
                        required: true,
                    },
                    role: {
                        type: Number,
                        required: true,
                        enum: Object.keys(common.rights),
                    },
                },
            ],
            required: true
        },
        cards: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Cards'
                }
            ]
        },
    },
    {
        timestamps: true,
    },
);

module.exports = TeamsSchema;