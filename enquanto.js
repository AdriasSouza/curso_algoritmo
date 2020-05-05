function acaoBotao(){
    var nome, idade, limite, contador
    limite = prompt("Quantas vezes quer verificar a idade?")
    contador = 0

    while (contador<limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("digite a idade do " + nome + ": " )

        if (idade>18)
            document.getElementById("paragrafo").innerHTML = nome + "você é maior de idade!"
        else
            document.getElementById("paragrafo").innerHTML = nome + "você é menor de idade!"
        contador++
    }
}