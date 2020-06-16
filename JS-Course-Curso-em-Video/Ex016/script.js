

function contar() {
    var iniciotxt = document.querySelector('input#txtinicio').value //Converte input txt em número e salva em variável
    var fimtxt = document.querySelector('input#txtfim').value //Converte input txt em número e salva em variável
    var passotxt = document.querySelector('input#txtpasso').value //Converte input txt em número e salva em variável

    var inicio = Number(iniciotxt)
    var fim = Number(fimtxt)
    var passo = Number(passotxt)

  
    var res = document.querySelector('div#resultado') //Atribui div resultado a uma variavel

    if (iniciotxt.length == 0 || fimtxt.length == 0 || passotxt.length == 0) {
        window.alert('Dados Inválidos. Reinsira os dados e tente novamente')
    }
    else {
        res.innerHTML += 'Contando:'

        if (passo <= 0) {
            window.alert('Passo <= 0 impossível. Considerando Passo = 1')
            passo = 1
        }
        else if (fim > inicio) // Vai contar para cima
        {
            for (var c = inicio; c <= fim; c += passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`

        } else { //Vai contar para baixo

            for (var c = inicio; c >= fim; c -= passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }
    }

}


