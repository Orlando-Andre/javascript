var vetor = []

function adicionar() {

    var num = document.getElementById('txtn').value
    var tab = document.getElementById('seltab')
    
    if(num.length == 0 || vetor.indexOf(num) != -1 || num < 1 || num > 100){
        alert('Valor inválido ou já existente na lista!')
    } else {

        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado. `
        tab.appendChild(item)
    
        vetor.push(num)
    }

   

}

function finalizar() {

    var res = document.getElementById('res')

    var qtdItens = vetor.length
    var ordemCrescente = []
    ordemCrescente = vetor.sort((a , b) => a - b);
    var maior = ordemCrescente[qtdItens - 1]
    var menor = ordemCrescente[0]

    var soma = 0
    for(var i in ordemCrescente){
        soma += Number(ordemCrescente[i])
    }
    
    res.innerHTML = `Ao todo, temos ${qtdItens} números cadastrados.<br>`
    res.innerHTML += `O maior valor informado foi ${maior} <br>`
    res.innerHTML += `O menor valor informado foi ${menor} <br>`
    res.innerHTML += `Somando todos os valores, temos ${soma} <br>`
    res.innerHTML +=`A média dos valores digitados é ${soma/qtdItens}`




    




}

