function sum(a,b,c){
    a = isNaN(a) ? 1 : a
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a + b + c
}
h=s=g={}
console.log(sum());
console.log(sum(h,s,g));
console.log(sum(2,5,7));


