/*let nome
let idade
console.log(typeof nome, nome)
console.log(typeof idade, idade)*/
//O resuldado dos dois foi undefined, pois não foi especificado como a resposta seria encontrada
let nome = prompt("Qual é o seu nome?")
let idade = Number(prompt("Qual é a sua idade?"))
//As caixas de pregunta e resposta funcionam, mas não slavam o resultado por falta do código de impressão das variáveis
console.log(typeof nome, nome)
console.log(typeof idade, idade)
//As impressões foram realizadas e os comandos tipificados
console.log(`Olá ${nome}, você tem ${idade} anos.`)
