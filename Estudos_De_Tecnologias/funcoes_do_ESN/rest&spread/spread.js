// clonando

const funcionarios = {
    nome: 'joao',
    idade: 20
}
const clone = {
    ativo:true,
    ...funcionarios
}
console.log(clone);
 // passando os elementos de outro array
const grupoA = ['joao','maria','sonia']
const grupoB = ['rafaela',...grupoA,'heloisa']
console.log(grupoB);
