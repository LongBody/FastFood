const express = require('express')
const productHandlers = require('../modules/product')

const productRouter = new express.Router()

productRouter.get('/', productHandlers.getAllProduct)

productRouter.get('/category', productHandlers.getProductByCategory)

productRouter.get('/find', productHandlers.search)

productRouter.get('/:id', productHandlers.findOne)

productRouter.post('/', productHandlers.create)

productRouter.put('/', productHandlers.update)

productRouter.delete('/:id', productHandlers.delete)


module.exports = productRouter