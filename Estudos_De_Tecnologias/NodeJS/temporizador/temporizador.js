const schedule = require('node-schedule')
const tarefa1 = schedule.scheduleJob('*/1 * * * * *',function(){
    console.log('oi',new Date().getSeconds());
    
})
setTimeout(()=>{
    tarefa1.cancel()
    console.log('tarefa cancelada');
    
},3000)