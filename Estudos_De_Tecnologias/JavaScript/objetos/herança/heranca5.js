String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}
console.log("tudo bem?".reverse());
Array.prototype.first = function(){
    return this[0]
}
const vec = ['1°','2°','3°']
console.log(vec.first());
