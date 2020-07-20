class Produto{
    constructor(codigo, nome, valor){
        this._codigo = codigo
        this._nome = nome
        this._valor = valor
    }
}

const p = new Produto(1, 'PS4', 1.600)

console.log(p)

const p2 = new Proxy(p, {
    get(target, prop, receiver){
        console.log(`Lendo a propriedade ${prop} de target.`)
        return target[prop]
    },
    set(target, prop, value, receiver){
        console.log(`Setando ${value} para propriadade ${prop}.`)
        //target[prop] = value
        //return target[prop] == value
        return Reflect.set(target, prop, value)
    }
})

console.log(p2)
console.log(p2._nome)
p2._nome = 'Xbox'
console.log(p2._nome)