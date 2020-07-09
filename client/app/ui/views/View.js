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
}