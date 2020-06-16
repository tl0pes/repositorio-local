function tabuada()
{
    var num = document.querySelector('input#txtn')
    var tab = document.querySelector('select#seltab')

    if (num.value.length == 0)
    {
        window.alert('Por favor, digite um número!') 
    } else{
        var n = Number(num.value) 
        tab.innerHTML = ''
        for (c=1; c<=10; c+=1){
        var item = document.createElement('option') //Criando option, que é cada campo da tabela, via JS
        item.text = `${n} x ${c} = ${n*c}` //Mostra a conta em cada linha
        tab.appendChild(item) //?
        }
    }
    
    var t = Number(tab.value)

}