class Action {
    constructor(model){
        this.model = model
    }

    async list(){
        try{
            let data = await this.model.find({}).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    async create(data){
        try {
            let result = new this.model(data)
            await result.save()

            return result
        } catch(err){
            throw err
        }
    }

    async search(params) {
        try{
            let result = await this.model.find(
                params
                ).exec()

            return result
        } catch(err){
            throw err
        }
    }

    async show(id) {
        try {
            let result = await this.model.findOne({_id: id}).exec()

            return result
        } catch(err){
            throw err
        }
    }

    async delete(id){
        try {
            let result = await this.model.findOneAndDelete({_id:id}).exec()

            return result
        } catch(err){
            throw err
        }
    }

    async update(id, sdata){
        try {
            let result = await this.model.findByIdAndUpdate({
                _id: id
                },
                data,
                {
                    new: true
                }).exec()
                await result.save()

                return result
        } catch(err){
            throw err
        }
    }
}

module.exports = Action