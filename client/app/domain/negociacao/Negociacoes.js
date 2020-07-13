class Negociacoes {

    constructor() {
        this._negociacoes = []
        Object.freeze(this)
    }

    add(negociacao) {
        this._negociacoes.push(negociacao)
    }

    toArray(){
        // programação defenssiva (imutável)
        return [].concat(this._negociacoes)
    }

    limpar(){
        //this._negociacoes = []
        this._negociacoes.length = 0
    }

    get volumeTotal(){
 
        let somatorio = function(total, atual){
            return total + atual.volume
        }

        return this._negociacoes.reduce(somatorio, 0)
    }
}