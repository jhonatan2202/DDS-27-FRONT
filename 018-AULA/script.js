console.log("AOOBA TOMA");

// LAÇOS DE REPETIÇÃO

// FOR = PARA / DURANTE

// I = VARIÁVEL DE CONTROLE
// i < 10 = duração do laço
// i++ = aumenta a interação de 1 em 1

for(var i = 0; i < 3 ; i++){
    console.log("Neymar é o melhor");
    console.log(i);
};
console.log("ACABOU!");

// WHILE = ENQUANTO

var contagem = 1

while(contagem < 51){
    contagem = contagem + 5
    console.log("Oi, meu chapa");
}

// ARRAY = LISTA

var alunos = ['Arroz', 6 , true, "outro", 7.7,["sim", ["não"]]]

// Mostra o array
console.log(alunos);

// Mostra um elemento especifico
console.log(alunos[5][1][0]);

//Mostra a quantidade de itens que tem no array
console.log(alunos.length);

// Lista times
var time = ["São paulo", "Vasco", "Santos", "Desportiva"]

// Interage com valor retornado
for(var i=0;i<time.length;i++){
    console.log("O time atual é:",time[i]);
}

// Funções para interagir com um array
var frutas = ["Melancia","Melão","Morango"]

// Array original
console.log(frutas);

// Para adição de elementos
// push - adiciona no fim do array
frutas.push("Uva")
console.log(frutas);

// unshift - Adiciona no início do array
frutas.unshift("Maracujá")
console.log(frutas);

// Para remoção de elementos
// Pop - remove o último elemento
var frutaRetirada = frutas.pop()
console.log("A última fruta era =", frutaRetirada);

frutas.unshift("Banana")

// shift - remover do início do array
var exPrimeiraFruta = frutas.shift()
console.log("A ex primeira fruta era:", exPrimeiraFruta);

// Descobrir se há um valor específico nesse array
console.log("Garçom, tem pitu?:",frutas.includes("Pitu"));
console.log("Garçom, tem pitu?:",frutas.includes("Maracujá"));

//sort - Ordenar o array
frutas.sort()
console.log(frutas);

// reverse - inverter o array
frutas.reverse()
console.log(frutas);

// convertendo o array
// console.log(frutas.toString())

// junta o array e troca o separador deles
// console.log(frutas.join(" - "))

// SLICE - copia
// (em qual indice começa, quantos elementos serão copiados)
console.log(frutas.length);
var parteCopiada = frutas.slice(1,3)
console.log("Cópia:",parteCopiada);

// SPLICE
// para remover
var removidos = frutas.splice(1,2)
console.log("Removidos:", removidos);

// para adicionar
frutas.splice( 2, 0, "Coca-cola","Laranja","Caju")
console.log(frutas);

// adicionando com substituição
frutas.splice( 1, 3, "Teclado","Mouse","Computador")
console.log(frutas);

var roupas = []
for(i=0;i<3;i++){
    roupas[i] = prompt("Digita uma roupa ai")
}
console.log(roupas)
