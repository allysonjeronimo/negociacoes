class NegociacaoController {

    constructor() {
        const $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
        
        const self = this

        this._negociacoes = new Proxy(new Negociacoes(), {
            get(target, prop, receiver){
                if(typeof(target[prop]) == typeof(Function) && ['add', 'limpar'].includes(prop)){
                    return function(){
                        console.log(`${prop} disparou a armadilha.`)
                        target[prop].apply(target, arguments)
                        self._negociacoesView.update(target)
                    }
                }
                else{
                    return target[prop]
                }
            }
        })

        /*
        this._negociacoes = new Negociacoes(model => {
            this._negociacoesView.update(model)
        })*/


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

        //this._negociacoesView.update(this._negociacoes)

        this._mensagemView.update(this._mensagem, 3)

        this._limparFormulario()
    }

    limpar(){
        this._negociacoes.limpar()
        this._mensagem.texto = 'Negociações apagadas com sucesso!'
        //this._negociacoesView.update(this._negociacoes)
        this._mensagemView.update(this._mensagem)
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