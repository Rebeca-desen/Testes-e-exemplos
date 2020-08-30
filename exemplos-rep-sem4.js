/*const numeros = [65, 842, 89, 789, 6, 9]

for (let i = 0; i< numeros.length; i++) {
    console.log(numeros[i] + 5)
}*/
 
/*const salada = ["alface", "tomate", "milho", "beterraba", "rucula"]

function imprimeIndiceEElemento(arr){
for (let i = 0; i<arr.length; i++){
    console.log(`indice ${i}, elemento ${arr[i]}`)
}

}
 
imprimeIndiceEElemento(salada)*/

/*const farinha = [1, 6, 9]
function imprimeSoma(arr) {
let soma = 0 
    for (let i = 0; i< arr.length; i++){ 
   soma += arr[i]
}
return soma
}
console.log(imprimeSoma(farinha))*/
 /*function objLivro(nomeLivro, pgsLivro, autoriaLivro){
     const obj = {
         titulo: nomeLivro,
         paginas: pgsLivro,
         autoria: autoriaLivro
     }
     return obj
 }
console.log(objLivro('xxxx', 400, 'yyyyyy'))*/
/*return({
    nomeLivro,
    pgsLivro,
    autoriaLivro
}) */
const objArrays = {
    array1: [1, 2, 3],
    array2: [5, 6, 7, 8],
    array3:[9,9,9]
}

/*function somaArray(obj, chave) {
    let total = 0
    for (let i = 0; i< obj[chave].length; i++){
        total += obj[chave][i]
    }
    return total
}
console.log(somaArray(objArrays, 'array1'))*/

function somaArrayForEach(obj, chave){
    let total = 0
    const arrResultado = obj[chave].map( function(indice){
total += indice
})
return total
}
