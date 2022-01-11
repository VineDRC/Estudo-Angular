// Criando filtro de ellipsis ...
angular.module("ListaTelefonica").filter("ellipsis", function(){
    return function(input, size){
        if (input.length <= size) return input;
        let ellipsis = input.substring(0,(size || 10)) + "...";
        return ellipsis;
        };
});