const { model } = require('../models')

const customerController = {
    getCustomer(req, res) {
        model.findOne({
            name: req.params.name
        }).then((data) => {
            res.json(data)
        })
    }
}

module.exports = customerController


// contractor dashboard
// email
// password
// add logo and post button
// sign up first and pay before using search functionality and or post functionality
// after signing in it will reload with access to search and post 

// name
// city
// last four of cell
// zip code

// communication
// picky
// paid on time

// show amount of reviews left by contractor on contractor dashboard

// add page for when someone is not in the database

// 