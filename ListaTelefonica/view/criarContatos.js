<!-- ng model é a ligação da view com o aplicativo/usuario envia dados para serem utilizados
ex, usuario digita o telefone, o aplicativo recebe o telefone e processa a informação e guarda ele em algum local... -->
<form name="contatoForm">
    <!-- Required -> Campo requirido, obrigatório, minlength -> minimo de caracteres -->
     <input class="form-control"  type="text" ng-model="contato.nome" name="nome" placeholder="Nome" ng-required="true" ng-minlength="4">
     <!-- ngPattern seria a obrigatoriedade que o campo deve seguir (regra) -->
     <input class="form-control"  type="text"  ng-model="contato.telefone" name="telefone" placeholder="Telefone" ng-required="true" ng-pattern="^\([1-9]{2}\)(?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$" maxlength="15" ui-Telefone>
     <input class="form-control" type="text" ng-model="contato.data" name="data" placeholder="Data" ng-required="true" ui-Data>
     <!-- Currency altera o tipo da moeda, como estou utilizando um arquivo do Angular pt-br ele puxou as informações BR como a moeda R$ -->
     <select class="form-control" ng-model="contato.operadora" ng-options="operadora.nome +' ( '+ (operadora.preco | currency) +' ) ' group by operadora.categoria for operadora in operadoras | orderBy: 'nome'">
         <option value="">Selecione uma Operadora</option> <!-- Para não deixar o campo vazio, foi criado este valor no option para estilizar melhor a nossa aplicação e deixar mais intuitiva -->
     </select>
     <!-- Declaração de mensagens de erro / Foi criado este ng-messages para não precisar repetir o campo abaixo em cada ng-message a baixo -->
     <div ng-messages="contatoForm.nome.$error">
         <!-- No message puxamos o ng-messages para diminuir a escrita e agilizar a criação da mensagem de erro -->
         <!-- Dirty -> Já usado | Pristine -> Nunca usado -->
        <div ng-message="required && contatoForm.nome.$dirty" class="alert alert-danger">
            Por favor preencher o campo Nome !
        </div>
        <div ng-message="minlength"  class="alert alert-danger">
            Insira um nome valido (mínimo 4 caracteres).
        </div>
    </div>
    <div ng-messages="contatoForm.telefone.$error">
        <div ng-message="required && contatoForm.telefone.$dirty" class="alert alert-danger">
            Por favor preencher o campo Telefone !
        </div>
        <div ng-message="pattern" class="alert alert-danger-telefone">
            O campo telefone deve estar no seguinte formato <br/>
             (99)99999-9999.
        </div>
    </div>
</form>