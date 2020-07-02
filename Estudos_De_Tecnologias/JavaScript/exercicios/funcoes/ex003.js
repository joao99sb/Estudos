function f(b,n){
    if(n==0){
        return 1
    }else{
        return b*f(b,n-1)
    }
}
console.log(f(2,9));


