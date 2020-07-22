
function isFunction(fn){
    return typeof(fn) == typeof(Function)
}

function printDetails(param){
    console.log(`${param} - Is function: ${isFunction(param)} - Type: ${typeof(param)}`)
}

printDetails({})
printDetails([])
printDetails('')
printDetails(' ')
printDetails(()=>{})
printDetails(function(){})
printDetails(10)
printDetails(0)
printDetails(true)
printDetails(typeof(Function))
printDetails(Function)