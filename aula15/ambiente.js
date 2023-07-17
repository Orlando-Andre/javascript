var num = [5, 8, 2, 9, 3]

num.push(1) // adicionar um elemento independente do índice
num.sort() //colocar todos em ordem crescente
console.log(num)
console.log(`O Vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é  ${num[0]} `)

for(var i = 0; i < num.length; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

for(var i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}