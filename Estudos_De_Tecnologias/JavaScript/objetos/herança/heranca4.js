function meuobj(){}
console.log(meuobj.prototype)

const obj1 = new meuobj
const obj2 = new meuobj
console.log(obj1.__proto__===obj2.__proto__);
console.log(meuobj.prototype === obj1.__proto__);

meuobj.prototype.nome = "joao"
console.log(obj2.nome);

const obj3 ={}
obj3.__proto__=meuobj.prototype
console.log(obj3.nome);
