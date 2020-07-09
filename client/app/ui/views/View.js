class View{
    constructor(seletor){
        this._elemento = document.querySelector(seletor)
    }

    update(model, secondsToHide){
        this._elemento.innerHTML = this.template(model)

        if (secondsToHide) {
            setTimeout(() => {
                this._elemento.innerHTML = ''
            }, secondsToHide * 1000)
        }
    }

    template(model){
        throw new Error('O método template() deve ser implementado na classe filha.')
    }
}