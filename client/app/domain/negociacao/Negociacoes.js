class Negociacoes {

    constructor() {
        this._negociacoes = []
    }

    add(negociacao) {
        this._negociacoes.push(negociacao)
    }

    toArray(){
        // programação defenssiva (imutável)
        return [].concat(this._negociacoes)
    }
}