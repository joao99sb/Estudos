const connection = require('../../database/connection')
// yarn add bcrypt para criptografar as senhas
const bcrypt = require('bcrypt')
const crypto = require('crypto')
//yarn add jsonwebtoken para JWT 
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')
const mailer = require('../../modules/mailer')
const { use } = require('../../modules/mailer')





function generateToken(params = {}){

    return jwt.sign(params,authConfig.secret,{
        expiresIn:86400
    })
}



module.exports={
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

        let user = result[0].id

        return res.send({
            user,
            token: generateToken({id:user})
        })
    },

    async forgotPassword(req,res){
        const { email } = req.body
        try {
            const user = await connection('users')
                .where('email',email)
                .select('*')
            
            if(user.length < 1){
                return res.status(401).send({error:'erro de autenticação'})
            }


            const token = crypto.randomBytes(20).toString('hex')
            const now = new Date()
            now.setHours(now.getHours() + 2)

            await connection('users')
                .where('email',email)
                .update({
                    passwordResetToken: token,
                    passwordResetExpires: now
                })
            console.log( token, now);
            

            mailer.sendMail({
                to:email,
                from:'joaovictor665@gmail.com',
                subject:'text',
                template:'../../resource/mails/auth/forgot_password',
                context:{ token },

            },(err)=>{
                if(err){
                    
                    
                    return res.status(401).send({error: err})
                }
            })

            return res.send('okay')
            
        } catch (err) {
            console.log(err);
            
            res.status(400).send({error:`error ${err} on password`})
        }
    },
    async resetPassword(req,res){
        const { email, token, senha} = req.body 
        const hash = await bcrypt.hash( senha ,10)
        
        try {
            const user = await connection('users')
                .where('email',email)
                .select('*')

            if(token != user[0].passwordResetToken ){
                console.log(user[0].passwordResetToken);
                
                return res.status(400).sens({error:'invalid token '})
            }
            const now = new Date()
            // if(now > user[0].passwordResetExpires){
            //     console.log(user[0].passwordResetExpires)
                
            //     return res.status(400).send({error:'token expired'})
            // }

            await connection('user')
                .where('email',email)
                .update({ password:hash })

            return res.send('okay')
            
        } catch (err) {
            res.status(400).send({error:err})
        }
    }
}