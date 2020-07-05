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
 
        let somatorio = function(total, atual){
            return total + atual.volume
        }

        return this._negociacoes.reduce(somatorio, 0)
    }
}