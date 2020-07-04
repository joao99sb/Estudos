const connection = require('../connection')
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
                password
            })            
        } catch (err) {
            return res.status(409).json({error:'email ja cadastrado'})
        }
            
        const result = await connection('users').where('email',email).select('email')

        if(result.length == 0){
            return res.status(500).json({error:'erro ao fazer o cadastro'})
        }
        return res.send({
            result.id,
            token:generateToken({id:result.id})
        })
    },

    async index(req,res){
        const result = await connection('users')
            .select('id','email')
        
        return res.json(result)
    },




    async login(req,res){
        const { email, senha } = req.body

        const result = await connection('users')
            .where('email',email)
            .select('*')
        
        
        if(result.length < 1){
            return res.status(401).json({error:'erro de autenticação'})
        }

        if(!await bcrypt.compare(senha, result[0].password)){
            return res.status(400).json({error:'invalid password'})
        }



        return res.send({
            email,
            token: generateToken({result.id})
        })
    }

}