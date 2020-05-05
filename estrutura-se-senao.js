function acaoBotao() {
    var valor1, valor2, resultado, operacao
    valor1 = prompt("Digite o primeiro valor: ")
    operacao = prompt("digite a operação: (Ex:+ , - , * , /) ")
    valor2 = prompt("Digite o segundo valor: ")

    if (operacao == "+") {
        resultado = ("O Dereguejhonson é: ") + (parseInt(valor1) + parseInt(valor2))
    } else if (operacao == "-") {
        resultado = ("O Dereguejhonson é: ") + (parseInt(valor1) - parseInt(valor2))
    } else if (operacao == "*") {
        resultado = ("O Dereguejhonson é: ") + (parseInt(valor1) * parseInt(valor2))
    } else if (operacao == "/") {
        resultado = ("O Dereguejhonson é: ") + (parseInt(valor1) / parseInt(valor2))
    }
    document.getElementById("paragrafo").innerText = resultado
}