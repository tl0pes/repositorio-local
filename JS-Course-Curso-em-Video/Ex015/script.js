function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var resultado = document.querySelector('div#res')
    var fsex = document.getElementsByName('radsex') 
    var fig = document.createElement('img') //Criando uma tag img via JS (dinamicamente)
    fig.setAttribute = ('id', 'foto') //Colocando o id 'foto' na img criada na linha anterior



    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Dados inválidos!')
    } else {

        var idade = (ano - Number(fano.value))
        var genero = ''

        if (fsex[0].checked) {
            genero = 'masculino'
            if (idade < 10) {
                fig.src = 'hcrianca.png'
            } else if (idade < 26) {
                fig.src = 'hadolescente.png'
            }
            else if(idade < 60){
                fig.src = 'hadulto.png'
            } else if (idade>= 60 && idade<100){
                fig.src = 'hidoso.png'
            } else{
                fig.src = 'munra.png'
            }

        }

else if (fsex[1].checked) {

    genero = 'feminino'

    if (idade < 10) {
        fig.src = 'mcrianca.png'
    } else if ( idade < 26) {
        fig.src = 'madolescente.png'
    }
    else if(idade < 60){
        fig.src = 'madulto.png'
    } else if (idade>= 60 && idade<100){
        fig.src = 'midoso.png'
    } else{
        fig.src = 'munra.png'
    }
}

resultado.innerHTML = `Detectou-se gênero ${genero} com idade ${idade} anos`
resultado.appendChild(fig)// inserindo a imagem dentro da div 'res'
    }
}

