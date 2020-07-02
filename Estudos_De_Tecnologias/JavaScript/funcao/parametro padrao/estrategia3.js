function soma(a,b,c){
    a = 0 in arguments ? a : 1
    b = 1 in arguments ? b : 1
    c = 2 in arguments ? c : 1
    return a+b+c
}
console.log(soma());
console.log(soma(3,6));



