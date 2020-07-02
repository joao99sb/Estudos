let raizes = []
let f = function(a,b,c){
    let delta = b**2 - 4*a*c
    if(delta<0){
        return console.log('a equacao apresenta raizes complexas');        
    }else{
        let x1 = (-b + delta**(0.5))/(2*a)
        let x2 = (-b - delta**(0.5))/(2*a)
        raizes.push(x1,x2)
        console.log(raizes);
        
    }
}
f(1,-4,3)