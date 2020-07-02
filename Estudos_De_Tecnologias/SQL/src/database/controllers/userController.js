const connect = require('../connection')


module.exports = {
    async create(req,res){
        const {name, email} = req.body
        try {            
            const result = await connect('queijo').insert({
                name,
                email
            })
            return res.json({name})
        } catch (error) {
            console.log(error);
                        
        }
    },
    async list(req,res){
        try {            
            const li = await connect('queijo').select('*')
            return res.json(li)
        } catch (error) {
            console.log(error)            
        }
    },
    async update(req,res){
        try {
            const {name} = req.body
            const {newName} = req.body

            await connect('queijo')
                .where('name',name)
                .update({name:newName})

            return res.json(newName)

        } catch (error) {
            console.log(error);
            
        }
    },
    async delete(req,res){
        const {name} = req.body

        await connect('queijo')
            .where('name',name)
            .del()
        return res.json(name)
    }   
}