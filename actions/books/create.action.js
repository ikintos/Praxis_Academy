const Book = require("../../models/book")
const shopListener = require("../../listener/shop.listener")
const events = require("events")
const emitter = new events.EventEmitter()

class Create {
    constructor(req) {
        this.title = req.body.title,
        this.description = req.body.description,
        this.price = req.body.price,
        this.author = req.body.author,
        this.shop_id = req.body.shop_id
    }

    async exec() {
        try {
            shopListener(emitter) //as subscriber
                let result = new Book({
                title: this.title,
                description: this.description,
                price: this.price,
                author: this.author,
                shop_id: this.shop_id
            })
            
            await result.save()

            emitter.emit("shop.add-qty", result) // as publisher
            
            return result
        } catch(err) {
            throw err
        }
    }
}

module.exports = Create
// class CreateBook {
//     constructor(req) {
//         this.title = req.body.title,
//         this.description = req.body.description,
//         this.price = req.body.price,
//         this.author = req.body.author
//     }

//     async exec() {
//         try {
//             let query = new Book({
//                 title: this.title,
//                 description: this.description,
//                 price: this.price,
//                 author: this.author
//             })
//             await query.save()

//             return query
//         } catch(err) {
//             throw err
//         }
//     }
// }

// module.exports = CreateBook
