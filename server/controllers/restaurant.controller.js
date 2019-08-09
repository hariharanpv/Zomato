const Restaurant = require('../models/restaurant.model');

module.exports = {
    insert
};

function insert(restaurant) {
    return new Restaurant(restaurant).save();
}