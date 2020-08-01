
interface IMailTo{
    name:string,
    email:string
}

interface IMailMessage{
    subject:string,
    body:string,
    attachment?: Array<string> // ou string[]

}

interface IMessageDTO{
    to: IMailTo,
    message:IMailMessage
}
// Data Transfer Object (DDD)
interface IEmailService{
    sendMail(Request:IMessageDTO):void
    // "tipando uma classe"
    
}
class EmailService implements IEmailService{
    sendMail({to, message}:IMessageDTO){
        console.log(`email enviado para ${to.name}:${message.subject}`)
    }

} 

export default EmailService