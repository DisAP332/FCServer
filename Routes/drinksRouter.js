const express = require("express")

const router = express.Router();

const drink_controller = require('../controllers/drinksController')

router.post('/addDrink', drink_controller.createDrink)
router.put('/drinks/:id', drink_controller.updateDrink)
router.delete('/drinks/:id', drink_controller.deleteDrink)
// router.get('/drinks/:id', drink_controller.getDrinkById)
router.get('/getDrinks', drink_controller.getDrinks)

module.exports = router