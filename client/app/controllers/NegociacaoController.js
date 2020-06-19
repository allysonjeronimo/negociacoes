class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document)

        this._inputData = $('#data')
        this._inputQuantidade = $('#quantidade')
        this._inputValor = $('#valor')
    }

    adiciona(event){
        event.preventDefault()

        console.log(
            this._inputData.value, 
            this._inputQuantidade.value, 
            this._inputValor.value)

        alert('NegociacaoController: adiciona()')
    }
}