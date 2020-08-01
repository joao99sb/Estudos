import { Request, Response } from "express"
import EmailService from '../services/emailService'
const user = [
    {name:'joao', email:'joao@micro.com'}
]




export default {
    async index(req:Request , res:Response){
        return res.json(user)
    },

    async create(req:Request, res:Response){
        const emailService = new EmailService()
        emailService.sendMail({
            to :{
                name:'joao',
                email:'joao@micro.com'
            },
            message:{
                subject:'Bem vindo!', 
                body:'seja bem vindo a esse mundo mágico do typescript'
            }
        })
        return res.send({message:'okay'})
    }
}