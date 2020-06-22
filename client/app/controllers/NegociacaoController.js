class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event) {
        event.preventDefault()

        //let data = new Date(this._inputData.value.split('-'))
        //let data = new Date(this._inputData.value.replace(/-/g, ','))
        // mes = 0..11
        // index == 1 ? item-1 : item
        // return item - index % 2
        let data = new Date(
            ...
            this._inputData.value.split('-')
            .map((item, index) => index - index % 2))

        let quantidade = this._inputQuantidade.value
        let valor = this._inputValor.value

        let negociacao = new Negociacao(
            data,
            parseInt(quantidade),
            parseFloat(valor))

        console.log(negociacao, data, quantidade, valor)

        alert('NegociacaoController: adiciona()')
    }
}