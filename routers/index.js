const express = require('express')
const productRouter = require('./products')


const router = new express.Router()

router.use('/api/product', productRouter)



module.exports = router