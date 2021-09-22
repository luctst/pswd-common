const { Schema } = require('mongoose');
const { common } = require('../macros/index');

const TeamsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
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
    },
    {
        timestamps: true,
    },
);

module.exports = TeamsSchema;