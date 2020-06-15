class ListaNegociacoes{

    constructor(){

        this._listaNegociacoes = [];

    }

    adiciona(negociacao){

        this._listaNegociacoes.push(negociacao);

    }

    get negociacoes(){
        
        //Programação defensiva
        //Para evitar que alguém consiga modificar minha lista de negociações diretamente
        //Retorno um vetor vazio concatenado com a lista de negociaçoes
        //Caso alguém altere a lista de negociações
        //Estará alterando o vetor vazio
        
        return [].concat(this._listaNegociacoes);

    }

}