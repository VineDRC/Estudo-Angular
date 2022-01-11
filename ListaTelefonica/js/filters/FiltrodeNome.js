// Criação do Filtro de Nome 
angular.module("ListaTelefonica").filter("FiltroNome", function() {
   return function(input){
       // split -> Está dividindo a String, por meio de espaço " ", quando houver espaço na string ele divide. Ex Vinicius dos Reis Corrêa -> "Vinicius" "dos"
        let NomeFiltrado = input.split(" ");
        let NomeFiltradoFormatado = NomeFiltrado.map(function(nome){
            // Este if é para caso haja da, de, dos no nome, ele não entre para o return nome.charAt
            if(/(da|de|dos)/.test(nome)) return nome;
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        // Join -> Pega uma array e entre cara elemento ele coloca o " " e coloca ele como string
        return NomeFiltradoFormatado.join(" ");
   };
});