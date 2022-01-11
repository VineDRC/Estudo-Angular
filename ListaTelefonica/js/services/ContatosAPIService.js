//SERVICE FACTORY
angular.module("ListaTelefonica").factory("contatosAPI", function($http, config){
    let _getContatos = function(){
        return $http.get(config.baseURL+"/contatos");
    };
    
    let _saveContatos = function (contato) {
        return $http.post(config.baseURL+"/contatos", contato);
    };
    
    return {
        getContatos: _getContatos,
        saveContatos: _saveContatos
    };
});