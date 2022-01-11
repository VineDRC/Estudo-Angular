// Diretiva de mensagem de erro na Conexão dos contatos
angular.module("ListaTelefonica").directive("uiAlert", function(){
    return {
        // Poderia utilizar o templateUrl:"alerta.html" Más a diretriz do navegador não permite.
        template:`<div class="ui-alert">
        <div class="ui-alert-title">
            Ops, aconteceu um problema !
        </div>
        <div class="ui-alert-message">
            {{error}}
        </div>
    </div>`
    };
});
