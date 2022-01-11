// Criação do Controller para Criar Contatos
angular.module("ListaTelefonica").controller("CriarContatosCtrl", function ($scope, contatosAPI, $location, operadoras) {
    $scope.operadoras = operadoras.data;
    $scope.adicionarContato = function (contato) {
        // Push, ele adiciona o item na Array e coloca ele na ULTIMA POSIÇÃO (PUSH)
        // Angular Copy serve para copiar o campo
        contatosAPI.saveContatos(contato).then(function (response) {
            delete $scope.contato
            $scope.contatoForm.$setPristine(); // Foi usado o setPristine, para cada vez que deletar o campo, ele setar os inputs como nunca tocados
            // para não aparecer a mensagem de erro.
            $location.path('/contatos'  );
        });
    };
});