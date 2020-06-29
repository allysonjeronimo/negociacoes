class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Negociacoes()
        this._negociacoesView = new NegociacoesView()
    }

    adiciona(event) {
        event.preventDefault()
        
        this._negociacoes.add(this._novaNegociacao())

        console.log(this._negociacoes.toArray())

        this._limparFormulario()
    }

    _novaNegociacao(){
        let data = DateConverter.toDate(this._inputData.value)
        let quantidade = this._inputQuantidade.value
        let valor = this._inputValor.value

        let negociacao = new Negociacao(
            data,
            parseInt(quantidade),
            parseFloat(valor))

        return negociacao
    }

    _limparFormulario(){
        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0
        this._inputData.focus()
    }
}