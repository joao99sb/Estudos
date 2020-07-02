const pilotos = ['Vettel','Alonso', 'Raikkonen','Massa']
pilotos.pop()
console.log(pilotos);

pilotos.push('Versatappen')
console.log(pilotos);

pilotos.shift()
console.log(pilotos)

pilotos.unshift('hamilton')
console.log(pilotos);

const novo = pilotos.slice(1,3)
console.log(novo);
