const express = require("express");

const router = express.Router();

const event_controller = require('../controllers/eventsController')


/// EVENT ROUTES ///
  
router.post('/addEvent', event_controller.createEvent)
router.put('/events/:id', event_controller.updateEvent)
router.delete('/events/:id', event_controller.deleteEvent)
router.get('/events/:id', event_controller.getEventById)
router.get('/getEvents', event_controller.getEvents)


module.exports = router