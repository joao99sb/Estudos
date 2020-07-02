const passo1 = (ctx,next) => {
    ctx.valor = 'mid1'
    next()
}
const passo2 = (ctx,next) => {
    ctx.valo2r = 'mid2'
    next()
}
const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx,...middleware) =>{
    const execPasso = indice =>{
        middleware && indice < middleware.length &&  
        middleware[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}
const obj = {}
exec(obj,passo1,passo2,passo3)
console.log(obj);

