
function avaliador(n){
    if(n < 37){
        console.log('reprovado');
        
    }else{
        let x = (3 + n)
        let y = (2 + n)
        let z = (1 + n)
        if(x % 5 == 0 ){
            console.log(`você foi aprovado com a nota ${x}`);
            
        }else if(y % 5 == 0){
            console.log(`você foi aprovado com a nota ${y}`);            
        }else if( z % 5 == 0){
            console.log(`você foi aprovado com a nota ${z}`);            
        }
    }     
}
avaliador(88)