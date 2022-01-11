// Criação da diretiva de mascara para Telefone
angular.module("ListaTelefonica").directive("uiTelefone", function(){
    return{
        require:"ngModel",
        link: function(scope, element, attrs, ctrl){
            let _telefoneFormatado = function(telefone){
                telefone = telefone.replace(/[^0-9]+/g, "");
                telefone=telefone.replace(/^(\d{2})(\d)/g,"($1) $2");
                telefone=telefone.replace(/(\d)(\d{4})$/,"$1-$2");
               // if (telefone.length > 5){
                //    telefone = telefone.substring(0,5) + "-" + telefone.substring(5,9);
              //  }
            return telefone
            }
        
        element.bind("keyup", function(){
           ctrl.$setViewValue(_telefoneFormatado(ctrl.$viewValue));
           ctrl.$render(); 
        })
        }
    };
});