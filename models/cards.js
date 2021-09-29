const { Schema } = require('mongoose');

const CardsSchema = new Schema(
    {
        author: {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            required() {
                return this.teamId ? false : true;
            }
        },
        name: {
            type: String,
            required: true,
            maxlength: 30,
        },
        data: {
            required: true,
            type: Map,
            of: String,
        },
        teamId: {
            type: Schema.Types.ObjectId,
            ref: 'Teams',
            required() {
                return this.author ? false : true;
            },
        },
    },
    {
        timestamps: true,
    }
);

module.exports = CardsSchema;