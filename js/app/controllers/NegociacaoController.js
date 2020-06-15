class NegociacaoController {

    constructor(){

        let $ = document.querySelector.bind(document);

        this._data = $('#data');
        this._quantidade = $('#quantidade')
        this._valor = $('#valor');

        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));

        this._negociacoesView.update(this._listaNegociacoes); 

    }

    inserirTransacao(event){

        event.preventDefault();

        let negociacao = this._criaNegociacao();

        this._listaNegociacoes.adiciona(negociacao);

        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.mensagem = 'Negociação inserida com sucesso!';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();

    }

    _criaNegociacao(){

        return new Negociacao(
            DateHelper.textoParaData(this._data.value),
            this._quantidade.value,
            this._valor.value
        );

    }

    _limpaFormulario(){
        
        this._data.value = '';
        this._quantidade.value = 1;
        this._valor.value = 0.0;

        this._data.focus();

    }

}