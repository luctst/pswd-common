const { Schema } = require('mongoose');

const CardsSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 30,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = CardsSchema;