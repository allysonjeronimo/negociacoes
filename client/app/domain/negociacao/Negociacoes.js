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

    get volumeTotal(){
        let total = 0
        for(let i = 0; i < this._negociacoes.length; i++){
            total += this._negociacoes[i].volume()
        }
    }
}