const vec = [1,2,3]
var x = 3
function list(n,x){
    if(x.indexOf(Number(n.value)) != -1){
        return true
    }else{
        return false 
    }
}
console.log(list(x,vec)) 