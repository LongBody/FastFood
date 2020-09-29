const mongoose = require('mongoose')
const Schema = mongoose.Schema


// String, Number, Boolean, Date, Object, Array , ObjectId



const productSchema = new Schema({
    title: String,
    categories: [{
        type: String,
    }],
    imageURL: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

})


module.exports = productSchema