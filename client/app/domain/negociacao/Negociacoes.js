class Negociacoes {

    constructor(updateCallback) {
        this._negociacoes = []
        this._updateCallback = updateCallback
        Object.freeze(this)
    }

    add(negociacao) {
        this._negociacoes.push(negociacao)
        this._updateCallback(this)
    }

    toArray(){
        // programação defenssiva (imutável)
        return [].concat(this._negociacoes)
    }

    limpar(){
        //this._negociacoes = []
        this._negociacoes.length = 0
        this._updateCallback(this)
    }

    get volumeTotal(){
 
        let somatorio = function(total, atual){
            return total + atual.volume
        }

        return this._negociacoes.reduce(somatorio, 0)
    }
}