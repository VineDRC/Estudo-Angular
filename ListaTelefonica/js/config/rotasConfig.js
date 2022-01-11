angular.module("ListaTelefonica").config(function ($routeProvider) {

    $routeProvider.when("/contatos", {
        templateUrl: "view/contatos.html",
        controller: "ListaTelefonicaCtrl",
        resolve: {
            contatos: function (contatosAPI) {
                return contatosAPI.getContatos();
            },
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });

    $routeProvider.when("/criarContatos", {
        templateUrl: "view/criarContatos.html",
        controller: "CriarContatosCtrl",
        resolve: {
            operadoras: function (operadorasAPI) {
                return operadorasAPI.getOperadoras();
            }
        }
    });

    $routeProvider.otherwise({ redirectTo: "/contatos" });
});
