const productModel = require('./modal')



const handler = {
    async getAllProduct(req, res, next) {
        try {

            let items = await productModel.find({})
            res.json(items)
        } catch (error) {
            next(error)
        }

    },

    async getProductByCategory(req, res, next) {
        try {
            let { name } = req.query
            let items = await productModel.find({ 'category': name })
            res.json(items)
        } catch (error) {
            next(error)
        }

    },

    async search(req, res, next) {
        try {
            let { search = '' } = req.query
            console.log(search)
                // if (search) {
                //     condition.title = new RegExp(search, 'i')

            // }
            // search = new RegExp(search, 'i')

            let searchWord = search.replace(/d|D/g, "đ");
            var phrase = "\"" + searchWord + "\""

            console.log(phrase)

            let items = await productModel.find({ $text: { $search: phrase } })
            res.json(items)

        } catch (error) {
            next(error)
        }

    },

    async findOne(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findById(id)
            console.log(item)
            res.json(item)
        } catch (error) {
            next(error)
        }

    },

    async create(req, res, next) {
        try {
            let data = req.body // { title: '123', description: '123' }
            let item = await productModel.create(data) // { _id: '', title, description }
            res.json(item)
        } catch (err) {
            next(err)
        }
    },
    async update(req, res, next) {
        try {
            let data = req.body
            let id = req.body._id

            if (!id) {
                throw new Error(`Require 'id' to update!`)
            }

            let item = await productModel.findByIdAndUpdate(
                id,
                data, { new: true }
            )
            res.json(item)
        } catch (err) {
            next(err)
        }
    },

    async delete(req, res, next) {
        try {
            let id = req.params.id
            let item = await productModel.findByIdAndDelete(id)
            res.json(item)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = handler