// Criação do controller

angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", function ($scope, contatos, operadoras) {

    // Declaração do Controller

    // Utilizasse o $scope caso use ele na VIEW, caso contrário pode usar var, let const, normalmente...

    $scope.app = "Lista Telefônica" // Titulo da Aplicação

    $scope.contatos = contatos.data;

    $scope.operadoras = operadoras.data;


    // then registra uma função em caso de sucesso.

    $scope.classe = "selecionado";

    // Função para Remover Contatos
    $scope.removerContato = function (contatos) {
        let confirmacao = window.confirm('Ao clicar em OK você estará removendo o contato selecionado');
        if (confirmacao === true) {
            $scope.contatos = contatos.filter(function (contato) {
                if (!contato.selecionado) {
                    return contato
                };
            });
        };
    };

    // Função para verificar se há um contato selecionado e qual
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    // Função para ordenar os itens
    $scope.ordenarPor = function (campo) {
        $scope.CriterioOrdenacao = campo
        $scope.direcaoDaOrdenacao = !direcaoDaOrdenacao;
    };
});