const connection = require('../../database/connection')
// yarn add bcrypt para criptografar as senhas
const bcrypt = require('bcrypt')
const crypto = require('crypto')
//yarn add jsonwebtoken para JWT 
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')




function generateToken(params = {}){

    return jwt.sign(params,authConfig.secret,{
        expiresIn:86400
    })
}




module.exports ={



    async create(req,res){
        const {email ,senha} = req.body
        const id = crypto.randomBytes(4).toString('hex')

        const hash = await bcrypt.hash( senha ,10) 
         
       let password = hash
        try {
            await connection('users').insert({
                id,
                email,
                password,

            })            
        } catch (err) {
            return res.status(409).json({error:err})
        }
            
        const result = await connection('users').where('email',email).select('email','id')

        if(result.length == 0){
            return res.status(500).json({error:'erro ao fazer o cadastro'})
        }
        
        let user = result[0].id
        
        return res.send({
            user,
            token: generateToken({id: user})
        })
    },

    async index(req,res){
        const result = await connection('users')
            .select('id','email')
        
        return res.json(result)
    },

}