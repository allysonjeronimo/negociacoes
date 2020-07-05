class Objeto{
    constructor(valor){
        this.valor = valor
    }
}

let colecao = []
colecao.push(new Objeto(10))
colecao.push(new Objeto(10))
colecao.push(new Objeto(10))

console.log('Valores: ' + colecao.map(i => i.valor))
console.log(`Total: ${colecao.map(i => i.valor).reduce((ac, at) => ac + at)}`)