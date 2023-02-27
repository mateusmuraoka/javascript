let dados = []
function adicionar(){
    var num = window.document.getElementById('txtnum')
    var res = window.document.getElementById('res')
    if (num.value == ''){
        window.alert('Por favor , digite um número válido.')
    }else{
        let n = Number(num.value)
        
        if (n > 100 || n < 1 || dados.indexOf(n) != -1){
            window.alert('Valor é inválido ou já encontrado na lista.')
        }else{
            dados.push(n)
            var item = window.document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            res.appendChild(item)

        }
    }
  
}
function finalizar(){
    
    
    let maior = 0
    let menor = 0
    let soma = 0
    //Descobrindo o maior valor do array
    for (let c = 0 ; c < dados.length; c++){
        if (dados[c]> maior){
            maior = dados[c]
        }
    }
    //descobrindo o menor valor do array
    for (let i =0 ; i < dados.length; i ++){
        if (i ==0){
            menor = dados[i]
        }else{
            if(dados[i] < menor){
                menor = dados[i]
            }
        }
    }
    //Soma dos valores contidos no array
    for(t = 0; t < dados.length; t++){
        soma = soma + dados[t]
    }
    //Cálculo da média dos valores contidos no array
    let media = soma / dados.length
    res1.innerHTML = ''
    res1.innerHTML += `<p>Ao todo, temos ${dados.length} números</p>`
    res1.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res1.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res1.innerHTML += `<p>A soma dos valores digitados é ${soma}</p>`
    res1.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}
