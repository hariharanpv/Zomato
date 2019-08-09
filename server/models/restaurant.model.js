const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
},
    thumb: {
        type: String,
        required: false
},
    location: {
        type: Object,
        required: false
    }
});


module.exports = mongoose.model( 'Restaurant', RestaurantSchema);