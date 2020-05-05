/*
escreval("Digite o nome do aluno:")
leia(nome)
escreval("Digite a nota 1 do aluno:")
leia(nota1)
escreval("Digite a nota 2 do aluno:")
leia(nota2)
//calcula a media do aluno
media <- nota1 + nota2 / 2
//verifica a media do aluno para avaliar aprovado ou reprovado
se (media >= 8) entao
   escreval("Aprovado!")
senao
   escreval("Reprovado!")
fimse
*/

var nome, nota1, nota2;
nome = prompt("Digite o nome do aluno:")
nota1 = prompt("Digite a nota 1 do aluno:")
nota2 = prompt("Digite a nota 2 do aluno:")

media = (parseInt(nota1) + parseInt(nota2)) / 2

if (media >= 5)
    alert("aprovado! " + nome)

else
    alert("Reprovado! " + nome)