console.log("VOCÊ TEM QUE DIGIAR NUMEROS ENTRE 1 E 1000 E A ORDEM DAS CAIXAS TEM QUE ESTAR EM ORDEM CRESCENTE");
var A = Number(prompt("Valor da caixa 1: "))
var B = Number(prompt("Valor da caixa 2: "))
var C = Number(prompt("Valor da caixa 3: "))
var QuantMov = undefined

if(C>(A+B)){
    QuantMov = 1
}

else if(C<(A+B)){
    QuantMov = 2
}

else if(A == B && B == C && A == C){
    QuantMov = 3
}

if(1<=A && A<=B && B<=C && C<=1000){
    console.log("A quantidade de movimentos do drone é: ",QuantMov);        
}

else{
    console.log("Você não seguiu as regras");
}


