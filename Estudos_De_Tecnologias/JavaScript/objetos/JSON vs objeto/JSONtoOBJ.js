const obj = {a:1,b:2, soma(){return this.a + this.b}}
console.log(typeof JSON.stringify(obj))
const json = '{"a":1,"b":2,"c":3}'
let b = JSON.parse(json)
console.log(b);




