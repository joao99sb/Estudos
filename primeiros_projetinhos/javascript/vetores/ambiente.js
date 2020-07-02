/*var num =[3,7,5]
console.log(`${num}`);
num[3]= 6
console.log(num);
num.sort()
console.log(num);*/
var get = []
for(let c=1;c<=10;c++){
    
    get.push(c)
}
/*for(let c = 0; c<= get.length; c++){
    console.log(get[c]);
    
}*/
for( let c in get){
    console.log(get[c]);
}
console.log(get.indexOf(11));

    