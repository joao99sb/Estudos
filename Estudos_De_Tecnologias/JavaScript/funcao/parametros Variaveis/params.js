function soma(){
    let s = 0
    for(c in arguments){
        s+=arguments[c]
    }
    return s
}
console.log(soma(1,2,5));
console.log(typeof arguments);
console.log('a','b','c');

