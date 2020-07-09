const connection = require('../../database/connection')

module.exports ={
    test(req,res){
        return res.send({okay:'token valido',user:req.userId})
    }
}