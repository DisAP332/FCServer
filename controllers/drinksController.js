const Drink = require('../models/drinkModel')

createDrink = (req, res) => {
    const body = req.body


    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a drink'
        })
    }

    const drink = new Drink(body)

    console.log(drink)

    if(!drink){
        return res.status(400).json({
            success: false,
            error: err,
        })
    }

    drink
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: drink._id,
                message: 'Drink created'
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Drink not created'
            })
        })
}

getDrinks = async (req, res) => {
    try {
        const drinksFound = await Drink.find({});
            if (drinksFound) {
                if(!drinksFound.length){
                    return res
                        .status(404)
                        .json({ success: false, error: `Drinks not found`})
                }
                return res.status(200).json({success: true, data: drinksFound})
            }
    } catch (err) {console.log(err)}
}

updateDrink = async (req, res) => {
    const body = req.body
    
    if(!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide drink details to update"
        })
    }

    try {
        const drinkFound = await Drink.findOne({_id: req.params.id});
        console.log(drinkFound)
        drinkFound.data.Name = body.data.Name
        drinkFound.data.Description = body.data.Description
        drinkFound.data.Cost = body.data.Cost
        drinkFound
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: drinkFound._id,
                    message: 'Drink Update!'
                })
            })
    } catch (err) {
        return res.status(404).json({
            err,
            message: 'Drink not found!'
        })
    }
}

deleteDrink = async (req, res) => {
    try {
        const drink = await Drink.findOneAndDelete({_id: req.params.id})
        if (!event) {
            return res
            .status(404)
            .json({ success: false, error: `Drink not found`})
        }
    } catch (err) { return res.status(400).json({success: false, error: err})}
}

module.exports = {
    createDrink,
    getDrinks,
    updateDrink,
    deleteDrink,
}



