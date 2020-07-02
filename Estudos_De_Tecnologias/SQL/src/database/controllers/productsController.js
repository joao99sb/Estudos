const connect = require('../connection')


module.exports = {
    async list(req,res){
        const {id} = req.params
        
        const query = connect('products')
        if(id){
            let result = await query
                .where('queijo_id',id)
                .join('queijo','queijo.id','=','queijo_id')
                .select('queijo.name','queijo.email','products.title','products.value','products.description')

            return res.json(result)
        }
        let result2 = await query.select('*')
        return res.json(result2)

    }
}