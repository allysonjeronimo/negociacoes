class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')

        this._negociacoes = new Bind(
            new Negociacoes(),
            new NegociacoesView('#negociacoes'),
            'add', 'limpar'
        )

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView('#mensagemView'),
            'texto'
        )
    }

    adiciona(event) {
        event.preventDefault()
        this._negociacoes.add(this._novaNegociacao())
        this._mensagem.texto = 'Negociação adicionada com sucesso!'
        this._limparFormulario()
    }

    limpar(){
        this._negociacoes.limpar()
        this._mensagem.texto = 'Negociações apagadas com sucesso!'
    }

    _novaNegociacao(){
        const data = DateConverter.toDate(this._inputData.value)
        const quantidade = this._inputQuantidade.value
        const valor = this._inputValor.value

        const negociacao = new Negociacao(
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