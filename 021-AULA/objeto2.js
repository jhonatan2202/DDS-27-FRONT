function opcoes(){
    console.log("as opções são:", this.volume.toString());
    
}

var produto1 = {
    nome : "Coca-cola",
    categoria : "Bebidas",
    quantidade : 30,
    volume : ["200ml","310ml","600ml","1,5l","3l"],
    descrição: function(){
        // THIS = REFERENCIA O PRÓPRIO OBJETO   
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    },
    verVolumes : opcoes
}
produto1.descrição()
produto1.verVolumes()

var produto2 = {
    nome : "Coxinha",
    categoria : "Salgado",
    quantidade : 300,
    volume : ["pequena","media","grande"],
    descrição: function(){
        console.log(`A ${this.nome} é da categoria ${this.categoria}`);
    },
    verVolumes : opcoes
}
produto2.descrição()
produto2.verVolumes()

// DÚVIDA LUCAS
var aluno = {
    nome: "Cristiano Ronaldo",
    anoEscolar:"7º",
    turma:"C",
    notas:[6,7,8],
    media: function(){

        let n1 = this.notas[0]
        let n2 = this.notas[1]
        let n3 = this.notas[2]

        return ((n1+n2+n3)/3)
    }   
}

console.log(aluno.media());
