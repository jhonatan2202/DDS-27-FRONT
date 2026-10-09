console.log("Manda um oi ai para eu ver...");

// FUNÇÕES
// SÓ EXECUTA
function teste(){
    console.log("Estou Funcionando");
}

// Executando
teste()

// Com retorno
function soma(){
    return 6 + 7
}

console.log(soma());

// Mostra apenas o texto da função, nãoo executa
console.log(soma);

// Com parametros

function teste2(parametro){
    console.log("O parametro enviado foi",parametro);
}

var nome = "Jhonatan"
teste2(nome)

//FAZ AÇÕES E RETORNA RESULTADOS
function media(n1,n2){
    let resultado = (n1+n2)/2
    return resultado
}

// GUARDA RESULTADO EM VARIÁVEL, PARA DEPOIS UTILIZA
var final = media(9,7)
console.log("Resultado da média:",final);

// FUNÇÃO ANONIMO

var mensagem = function(){
    console.log("Oi, toma creu")
}
// Mostra o texto da função
console.log(mensagem);

// Apenas guarda o texto da função
mensagem

// Executa a função
mensagem()

// ARROW FUNCTIONS - FUNÇÃO DE SETA
const multiplicar = (x,y)=>{
    let result, primeiro = x , segundo = y
    result = primeiro*segundo
    return result
}

console.log("O resultado da multiplicação é:"+ multiplicar(7,4));

// MENOR
// QUANDO SÓ TEM UMA LINHA DE RETORNO, O RETURN PODE SER OMITIDO TAMBÉM
const dobro = numero => numero * 2

console.log("O dobro é:", dobro(67));

var media = (numero00,numero01) =>{
    let resultado_media = (numero00+numero01)/2
    return resultado_media
}

console.log("A Média é:"+media(Number(prompt("Digita um numero ai")), Number(prompt("Digite outro numero ai"))))

