const x = 'global'

function f(){
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}   
const minhafuncao = f()
console.log(minhafuncao());
