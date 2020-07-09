class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        this._negociacoes = new Negociacoes()
        this._negociacoesView = new NegociacoesView('#negociacoes')

        this._negociacoesView.update(this._negociacoes)
        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView('#mensagemView')

        this._mensagemView.update(this._mensagem)
    }

    adiciona(event) {
        event.preventDefault()
        
        this._negociacoes.add(this._novaNegociacao())

        this._mensagem.texto = 'Negociação adicionada com sucesso!'

        this._negociacoesView.update(this._negociacoes)

        this._mensagemView.update(this._mensagem, 3)

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