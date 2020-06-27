class Negociacoes {

    constructor() {
        this._negociacoes = []
    }

    add(negociacao) {
        this._negociacoes.push(negociacao)
    }

    toArray(){
        return this._negociacoes
    }
}