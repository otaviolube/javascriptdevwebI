class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }

    _template(model){

        this._elemento.style.display = "";

        setTimeout(
            () => this._elemento.style.display = 'none', 
            3000
        );

        return `
            <div class="alert alert-success" role="alert">${model.mensagem}</div>
        `;
    }

}