function contar() {
    
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value

    var res = document.getElementById('res')

    if(inicio.length == 0 || fim.length == 0 || passo.length == 0 ) {
        res.innerHTML = 'Impossível contar!'
    } else {

        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)

        if(passo <= 0) { 
            alert('Passo inválido. Passo assumirá o valor 1')
            passo = 1
        }
        if(inicio > fim) {

           for(var c = i; c >= f; c-= p){
                res.innerHTML += ` ${c} \u{1f449}`
           }

        } else{
            for(var c = i; c <= f; c += p ){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}