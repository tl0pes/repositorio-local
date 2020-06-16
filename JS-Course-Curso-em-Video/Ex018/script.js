

    var array = [] // declaração da variavel array
    var qtenumeros = document.querySelector('div#resqtenumeros')
    var maiorvalor = document.querySelector('div#resmaiorvalor')
    var menorvalor = document.querySelector('div#resmenorvalor')
    var soma = document.querySelector('div#ressoma')
    var media = document.querySelector('div#resmedia')

function adicionar(){   

    var ntxt = document.querySelector('input#txtn') 
    var seletor = document.querySelector('select#sel')

    var n = Number(ntxt.value)

    if (ntxt.value.length == 0 || n>100 ) //detecta se o valor não foi digitado OU se o valor é > 100
    {
        window.alert('Por favor, digite um valor válido!')// mensagem de erro
    } else{
        var item = document.createElement('option') //cria um 'option' que é um item da lista
        item.text = `Valor ${n} adicionado` //escreve no item
        seletor.appendChild(item) //insere dinamicamente o item no elemento 'selector'

        ntxt.innerHTML = '' // zera os resultados (divs) quando um novo valor é adicionado
        qtenumeros.innerHTML = ''
        maiorvalor.innerHTML = ''
        menorvalor.innerHTML = ''
        soma.innerHTML = ''
        media.innerHTML = ''
        ntxt.focus() // coloca o curso no objeto de input para facilitar
        
        array.push(n) // insere o valor digitado no próximo bit disponível no array

    }

}

function verificar(){

    if (array.length == 0) // verifica se o botão verificar foi pressionado
    {
        window.alert('Por favor, insira os dados')
    }else{

    var maior = array[0] //define inicialmente o primeiro elemento do array como menor
    var menor = array[0] //define inicialmente o primeiro elemento do array como menor
    var svalores = 0 // inicializa variável de somatória de valores
    var mvalores = 0 // inicializa variável de média de valores

    for (var ponteiro in array)
    {

        svalores +=array[ponteiro] //incrementa os valores do array na variável svalores
        mvalores = (svalores/array.length) //atribui a somatória dos valores dividido pelo número do array a variavel mvalores

        if (array[ponteiro]>maior) //se o valor atualmente em verificação do array é maior que o maior já inserido
        {
            maior = array[ponteiro] //atribui o valor em verificação ao maior 
        }
        if (array[ponteiro]<menor) //se o valor atualmente em verificação do array é menor que o menor já inserido
        {
            menor = array[ponteiro]  //atribui o valor em verificação ao menor         
        }
        
    }
// Escreve os valores obtidos nas variáveis DIV
    qtenumeros.innerHTML = `A quantidade de valores inseridos é <strong>${array.length}</strong>`
    maiorvalor.innerHTML = `O maior valor inserido é <strong>${maior}</strong>`
    menorvalor.innerHTML = `O menor valor inserido é <strong>${menor}</strong>`
    soma.innerHTML = `A soma dos valores inseridos é <strong>${svalores}</strong>`
    media.innerHTML = `A média dos valores inseridos é <strong>${mvalores}</strong>`
}

}