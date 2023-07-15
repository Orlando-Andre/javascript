
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = document.getElementById('ano')
    var res = document.getElementById('res')

    if(fAno.value.length == 0 || fAno.value > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancaMenino.png')
                
            }else if(idade < 21){
                //Jovem

                img.setAttribute('src', 'jovemGaroto.png')
                
            }else if(idade <50){
                //Adulto
                img.setAttribute('src', 'adulto.png')
                

            }else{
                //Idoso
                img.setAttribute('src', 'idoso.png')
                
            }
        }else{
            genero = 'Mulher'

            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'criancaMenina.png')
                
                
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'jovemGarota.png')
                

            }else if(idade <50){
                //Adulto
                img.setAttribute('src', 'adulta.png')
                

            }else{
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}