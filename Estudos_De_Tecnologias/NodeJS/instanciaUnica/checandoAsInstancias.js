const moduloA = require('./instanciaUnica')
const moduloB = require('./instanciaUnica')

const moduloC = require('./instanciaNova')()
const moduloD = require('./instanciaNova')()

moduloA.inc()
moduloA.inc()
console.log(moduloA.valor, moduloB.valor);

moduloC.inc()
moduloC.inc()
console.log(moduloC.valor,moduloD.valor);

