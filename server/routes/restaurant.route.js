const express = require('express');
const restaurantCtrl = require('../controllers/restaurant.controller');

const router = express.Router();
module.exports = router;

router.route('/add-favourite').post(addFavourite);

function addFavourite(req, res) {
    restaurantCtrl.insert(req.body);
    res.json({"status": "success"});
    
}