class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Negociacoes()
    }

    adiciona(event) {
        event.preventDefault()

        let data = DateConverter.toDate(this._inputData.value)
        let quantidade = this._inputQuantidade.value
        let valor = this._inputValor.value

        let negociacao = new Negociacao(
            data,
            parseInt(quantidade),
            parseFloat(valor))

        this._negociacoes.add(negociacao)

        console.log(this._negociacoes.toArray())

        this._limparFormulario()
    }

    _limparFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
}