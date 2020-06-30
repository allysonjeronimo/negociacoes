class DateConverter{

    constructor(){
        throw new Error('A classe DateConverter não pode ser instanciada.')
    }

    static toText(date){
        return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
    }

    static toDate(text){
        if(!/^\d{4}-\d{2}-\d{2}$/.test(text))
            throw new Error('A data deve estar no formato yyyy-MM-dd')
        //let data = new Date(this._inputData.value.split('-'))
        //let data = new Date(this._inputData.value.replace(/-/g, ','))
        // mes = 0..11
        // index == 1 ? item-1 : item
        // return item - index % 2
        return new Date(...text.split('-').map((item, index) => item - index % 2))
    }
}