const mongoose = require('mongoose')
const Schema = mongoose.Schema


// String, Number, Boolean, Date, Object, Array , ObjectId



const productSchema = new Schema({
    title: String,
    category: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isExist: Boolean

})


module.exports = productSchema