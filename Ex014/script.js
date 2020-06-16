function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem_manha')

    var data = new Date()
    var hora = data.getHours()
    //var hora = 21 //linha de teste para horas

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = 'yellow'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = 'orange'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = 'gray'
    }


}
