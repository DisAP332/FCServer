const Event = require('../models/eventsModel')

createEvent = (req, res) => {
    const body = req.body

    console.log(body)
    
    if(!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a event"
        })
    }

    const event = new Event(body)

    console.log(event)

    if (!event) {
        return res.status(400).json({ success: false, error: err })
    }

    event
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: event._id,
                message: 'Event created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Event not created!',
            })
        })
}

updateEvent = async (req, res) => {
    const body = req.body
    
    if(!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide event details to update"
        })
    }

    try {
        const eventFound = await Event.findOne({_id: req.params.id});
        console.log(eventFound);
        eventFound.data.Name = body.data.Name
        eventFound.data.Date = body.data.Date
        eventFound.data.Description = body.data.Description
        eventFound.data.Cost = body.data.Cost
        eventFound.data.TimeDoorsOpen = body.data.TimeDoorsOpen
        eventFound
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: eventFound._id,
                    message: 'Event updated!',
                })
            })

    } catch (err) {
        return res.status(404).json({
            err,
            message: 'Event not found!'
        })
    }
}

deleteEvent = async (req, res) => {
    console.log('heeeeyyy we at delete')
    try {
        const event = await Event.findOneAndDelete({_id: req.params.id})
        if (!event) {
            return res
            .status(404)
            .json({ success: false, error: `Event not found` })
        }
    } catch (err) { return res.status(400).json({ success: false, error: err }) }
}

getEventById = async (req, res) => {
    try {
        const event = await Event.findOne({_id: req.params.id })
        if (!event) {
            return res
            .status(404)
            .json({ success: false, error: `Event not found` })
        }
        return res.status(200).json({ success: true, data: event })
    } catch (err) {
        return res.status(400).json({ success: false, error: err })
    }
}

getEvents = async (req, res) => {
    try {
        const eventsFound = await Event.find({});
            if (eventsFound) {
            if (!eventsFound.length) {
                return res
                    .status(404)
                    .json({ success: false, error: `Events not found`})
            }
            return res.status(200).json({success: true, data: eventsFound})
        }
    } catch (err) { console.log(err) }
}

module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEventById,
    getEvents,
}