const mongoose = require("mongoose")
const { DateTime } = require('luxon')

const Schema = mongoose.Schema;

const EventSchema = new Schema({
    data: {
        Date: {
            type: Date,
            required: true,
            ref: "eventDate",
        },
        Name: {
            type: String,
            required: true,
            ref: "eventName"
        },
        Description: {
            type: String,
            required: true,
            ref: "eventDescription"
        },
        Cost: {
            type: Number,
            required: true,
            ref: "eventName"
        },
        TimeDoorsOpen: {    
            type: Number,
            required: true,
            ref: "eventName"
        },
    },
})

const Event = mongoose.model("event", EventSchema)

EventSchema.virtual("url").get(function () {
    return `/events/${this._id}`;
})

module.exports = mongoose.model("Event", EventSchema)