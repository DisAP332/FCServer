const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    data: {
        Name: {
            type: String,
            required: true,
            ref: "drinkName"
        },
        Description: {
            type: String,
            required: true,
            ref: "drinkName"
        },
        Cost: {
            type: Number,
            required: true,
            ref: "drinkCost"
        }
    }
})

const Drink = mongoose.model('drink', DrinkSchema)

DrinkSchema.virtual('url').get(function () {
    return `/drinks/${this._id}`
})

module.exports = mongoose.model("Drinks", DrinkSchema)