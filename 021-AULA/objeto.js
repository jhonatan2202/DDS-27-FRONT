console.log("TOMA AULA BB");

var musicas = ["Pera aí", "Se ...", "Segredos"]
var cantores = ["Cirilo","Djavan","Frejat"]
for(var i = 0; i < musicas.length; i++){
    console.log(musicas[i],"-",cantores[i]);
}

// OBJETO
var filme1={
    "chave": "valor",
    titulo : "Rei leão",
    genero : "Animação",
    ano : 1996
}

console.log(cantores);

// Acessando chave específica
console.log(filme1.titulo);

// Uso de crase
console.log(`O filme: ${filme1.titulo} foi lançado em ${filme1.ano}`);

console.log(`Gênero: ${filme1["genero"]}`);

var intervalo={
    truco : "Dobro",
    Empada : "Gostosa",
    Juan : "Truco",
    Horario : "20:00"
}

console.log(`O intervalo começou as ${intervalo.Horario}, e já fui comprar logo a minha empada, que aliás estava muito ${intervalo.Empada}.Depois que eu terminei a minha empada, fui logo jogar um truco. A partida começa com o juan falando ${intervalo.Juan}, e eu que sou ousado falei ${intervalo.truco}.`);

// OBJETO VAZIO
var garrafa = {}

console.log(garrafa);

// Criar pripriedades
garrafa.cor = "Bege"
garrafa.preco = 99
garrafa.volume = "710ml"
garrafa["tampada"] = false
console.log(garrafa);

// Altera uma propriedade existente
garrafa.cor = "Vermelho"
console.log(garrafa);

// var chave = prompt("Digite o nome da nova propriedade")
// var valor = prompt("Digite o valor dessa nova propriedade")

// garrafa.chave = valor

// console.log(garrafa);

// Continuando objetos
var leao = {
    // Propriedades, vulgo características
    nome : "Simba",
    temPelo : true,
    especie : "Doméstico",
    peso : 60,
    idade : 10,
    // Métodos
    andar : function(){
        console.log("Estou andando")
    },
    falar : ()=>{
        console.log("Miau");
    }
}

console.log(leao);
// Mostra o texto do método
console.log(leao.andar);
// Executar o método do leão
console.log(leao.falar());

