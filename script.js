/**###########################################################################
 *                             TEMPLATE ########################################################################### */


// Primeira lição do template
// multiplicados por 3
// números pares

// MUITO CONFUSO, REFAZER

// arrayDeNumeros = [5,10,33,40,3,100]
// // const multiplicaPor3 = (num) => num * 3
// const multiplicaPor3 = (num) => num * 3
// //console.log(multiplicaPor3(10));
// const retornaPares = (arrayDeNumeros) => {
//   let novoArray = []
//   for(let i = 0; i < arrayDeNumeros.length; i++){
//     if(arrayDeNumeros[i] % 2 === 0){
//       novoArray.push(arrayDeNumeros[i])
//     }
//   }
//   return novoArray
// }
// //console.log(retornaPares(arrayDeNumeros));

// function fazerOperacoes(array, callback){
//   const novoArray = callback(array)
//   return novoArray
// }
// console.log("Callback multiplicado por 3", fazerOperacoes(arrayDeNumeros, multiplicaPor3));
// console.log("pegar pares em callback", fazerOperacoes(arrayDeNumeros, retornaPares));

// Para gaurdar na cabeça, Template
const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]



/**###########################################################################
 *                    ÁREA DE ESTUDO FUNÇÕES DE ARRAY ########################################################################### */

// .map()

// Mudar o valor das frutas

// const frutas = [
//   {
//     nome: "Maçã",
//     preco: 0.5
//   },
//   {
//     nome: "Melancia",
//     preco: 1
//   },
//   {
//     nome: "Manga",
//     preco: 0.8
//   }
// ]

// function mudarValores(item){
//   const novoValor = {
//     nome: item.nome,
//     preco: item.preco * 2,
//     cor: "branca"
//   }
//   return novoValor
// }
// //console.log(mudarValores(frutas[0]));

// // const novasFrutas = frutas.map(mudarValores)

// // //console.log(novasFrutas[1]); imprime apenas informações do array de posição 1.
// // console.log(novasFrutas);

// const novasFrutas = frutas.map ((item) => {
//   const novoItem = {
//     nome: item.nome,
//     preco: item.preco * 3,
//     estoque: true
//   }
//   return novoItem
// })
// console.log(novasFrutas);

// .filter

// function procurarItem(item){
//   if(item.nome === "Melancia"){
//     return item
//   }
// }

// const itemFiltrado = frutas.filter(procurarItem)

// console.log(itemFiltrado);

// const itemFiltrado = frutas.filter((fruta) => {
//   if (fruta.nome === "Manga")
//   return fruta
// })

// const itemFiltradoPorValor = frutas.filter((fruta) => {
//   if (fruta.preco === 0)
//   return fruta
// })

// console.log(itemFiltrado);
// console.log(itemFiltradoPorValor);

// exercitando função

// function calculaArea(altura, largura){
//   const area = altura * largura
//   return area
// }

// //const areaCalculada = calculaArea(2,3)
// console.log(calculaArea(9,3));

// //console.log(calculaArea(1,3));


// exercitando função com Arrow function
// const calcularArea = (altura, largura) => {
// 	const area = altura*largura;
// 	console.log(area);
// }

// calcularArea(3,2);

// Três forma e declarar funções
// Tradicional - com parâmetros
// function darOiTradicional(nome){
//   console.log(`Olá ${nome}!!! TRADICIONAL COM PARÂMETROS`);
// }
// //darOiTradicional("Simone")

// // Não-nomeada / expreção de função/ função anônima - com parâmetros
// const darOiAnon = function (nome){
//   console.log(`Olá ${nome}!!! ANÔNIMA COM PARÂMETROS`);
// }
// //darOiAnon("Mariane")

// // Arrow function - com parâmetros
// const darOiArrow = (nome) => {
//   console.log(`Olá ${nome}!!! ARROW FUNCTIONCOM PARÂMETROS`);
// }
// //darOiArrow("Pedro")

// // Tradicional - SEM parâmetros
// function darOiTradicional(){
//   console.log(`FUNÇÃO TRADICIONAL SEM PARÂMETROS`);
// }
// darOiTradicional()

// // Não-nomeada / expreção de função/ função anônima - SEM parâmetros
// const darOiAnon = function (){
//   console.log(`FUNÇÃO ANÔNIMA SEM PARÂMETROS`)
// }
// darOiAnon()

// // Arrow function - SEM parâmetros
// const darOiArrow = () => {
//   console.log(`FUNÇÃO ARROW FUNCTION SEM PARÂMETROS`);
// }
// darOiArrow()

// Função arrow function simplificada. Só pode ser usada se não tiver lógica, apenas o return.
// function imprimeNome(nome){
//   return `Olá ${nome}`
// }
// console.log("Simone");

// const multiplicaPor3 = (num) => num * 3
// console.log(multiplicaPor3(10));

// CALLBACK INGRESSO

// function verificaIdade(idade){
//   if(idade >= 18){
//     return "Noturno"
//   }else{
//     return "Matinê"
//   }
// }
// //console.log(verificaIdade(18));

// function imprimeIngresso(nome, idade, callback){
//   let ingresso = {}
//   const turno = callback(idade)

//   ingresso = {
//     nome: nome,
//     idade: idade,
//     turno: turno,
//     menssagem: "Boa festa!!!"
//   }
//   return ingresso
// }

// console.log(imprimeIngresso(`Simone`, 43, verificaIdade));

// Variado de funções

// const multiplicaPor3 = (num) => num * 3
// console.log(`Resultado do múmero X 3 = ${multiplicaPor3(10)}`);
// ((num)=>{console.log(num * 3)})(10)
// ((nome)=>{console.log(`Olá ${nome}`)})("Simone")

// const arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10]
// // const multiplicaPor2 = (num) => num * 2
// // const numeroMultiplicadoPor2 = arrayDeNumeros.map(multiplicaPor2)
// // console.log(numeroMultiplicadoPor2);

// const numeroMultiplicadoPor5 = arrayDeNumeros.map((num) => num * 5)
// console.log(numeroMultiplicadoPor5);

// const numerosMenoresQue6 = arrayDeNumeros.filter((num) => {
//   return num < 6
// })
// console.log(numerosMenoresQue6);

// CALCULADORA

// const arrayDeNumeros = [1,2,3,4,5,6,7,8,9,10]

// const multiplicaPor2 = (num) => num * 2

// const numerosMultiplicadosPor2 = arrayDeNumeros.map(multiplicaPor2)
// console.log(numerosMultiplicadosPor2);


