class Negociacao {

    constructor(data, quantidade, valor){
        if(data && quantidade && valor){
            this._data = data;
            this._quantidade = quantidade;
            this._valor = valor;
        }else{
            this._data = new Date();
            this._quantidade = 10;
            this._valor = 100;
        }
        
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        return this._data;
    }

    set data(data){
        this._data = data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}