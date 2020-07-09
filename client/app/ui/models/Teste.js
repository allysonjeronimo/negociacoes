function isTrue(value){
    return value == true
}

console.log('', isTrue(''))
console.log(undefined, isTrue())
console.log(0, isTrue(0))
console.log(null, isTrue(null))
console.log(NaN, isTrue(NaN))
console.log(false, isTrue(false))

console.log(' ', isTrue(' '))
console.log({}, isTrue({}))
console.log(1, isTrue(1))
console.log(-1, isTrue(-1))
console.log(true, isTrue(true))
console.log([], isTrue([]))