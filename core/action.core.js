class Action {
    constructor(model){
        this.model = model
    }

    async list(params, params2){
        try{
            // console.log(params2)
            // let data = await this.model.find(params).exec()
            let data = await this.model.paginate(params2,params)
            .then(res => {
                    return {
                        data: res.docs,
                        total: res.total,
                        limit: res.limit,
                        page: res.page,
                        pages: res.pages
                    }
                })
                return data
        } catch(err) {
            throw err
        }
    }

    async paginate(req){
        try {
            let params = {}            
            let limit = parseInt(req.query.limit)
            if(!limit) {
                params.limit = parseInt(process.env.DATA_LIMIT)
            }else {
                params.limit = limit
            }
            let page = parseInt(req.query.page)
            if(!page){
                params.page = parseInt(process.env.DATA_PAGE)
            } else {
                params.page = page
            }

            let data = await this.model.paginate({}, params)
            .then(res => {
                return {
                    data: res.docs,
                    total: res.total,
                    limit: res.limit,
                    page: res.page,
                    pages: res.pages
                }
            })
            let meta = {
                total: data.total,
                limit: data.limit,
                page: data.page,
                pages: data.pages
            }
            data = data.data


            return { data, meta }
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

    async detail(data) {
        try {
            let result = await this.model.findOne({_id : data}).exec()
            console.log(result)
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

    async update(id, data){
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

    // async search(params) {
    //     try{
    //         let result = await this.model.find(
    //             params
    //             ).exec()

    //         return result
    //     } catch(err){
    //         throw err
    //     }
    // }