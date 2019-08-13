const express = require('express')
const db = require('../data/dbConfig');

const router = express.Router();


router.get('/', (req, res) => {

    const query = db('cars')

    query
        .then(cars => {
            res.status(200).json(cars)
        })
        .catch(err => {
            res.status(500).json({message: "Could Not Retrieve"})
        })
})









module.exports = router;