function filme(personagens, filmes, lancamentos, id) {

    if (id > filmes.length){
  
      return 'Essa não é uma opção válida.'
  
    }if (id > personagens.length){
  
      return 'Essa não é uma opção válida.'
  
    }if (id > lancamentos.length ){
  
      return 'Essa não é uma opção válida.'
  
    }if(id< 1){
      return 'Essa não é uma opção válida.'
    }
  
    return  personagens[id-1] + ' é um personagem do filme ' + filmes[id-1] + ' que estreou no cinema em ' + lancamentos[id-1]
  
  }
console.log(repete('oi',5))