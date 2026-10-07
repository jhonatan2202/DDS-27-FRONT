console.log("Desvios condicionais");

// DESVIOS CONDICIONAIS
// IF = SE
// ELSE = SE NÃO
// ELIF = SE NÃO SE

var estaVivo = false

// Primeira comparação
if(estaVivo){
    console.log("Cara cê ta vivo")
}

// Segunda comparação
else if(estaVivo == undefined){
    console.log("Mano, sei como cê tá");
    
}

// último caso
else{
    console.log("Cara cê ta morto");
    
}

// SWITCH/CASE
var camisa = "Vermelha"

switch(camisa){
    case "Preta":
        console.log("Parabéns, você acaba de ganhar um vinil da sabrina carpenter");
    break
    case "Branca":
        console.log("Você ganhou um body splash da virgínia");
    break
    case "Vermelha":
        console.log("Você ganhou uma ferrari, 3 portas, com teto solar e escada");
    break
    default:
        console.log("Poxa você ganhou nada, você é trouxa, desculpa ai");
    break
}

// PROMPT - INTERAGEM COM O USUÁRIO E COLETA UM VALOR
var preferido = prompt("QUAL É O SEU PET FAVORITO DO MUNDO DOS FILMES: ")

console.log("Seu PET preferido é:", preferido);
