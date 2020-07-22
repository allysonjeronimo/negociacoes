class ProxyFactory{

    static isFunction(fn){
        return typeof(fn) == typeof(Function)
    }

    static create(object, methods, callback){

        return new Proxy(object, {
            get(target, prop, receiver){
                if(ProxyFactory.isFunction(target[prop]) && methods.includes(prop)){
                    return function(){
                        console.log(`${prop} disparou a armadilha`)
                        target[prop].apply(target, arguments)
                        callback(target)
                    }
                }
                else{
                    return target[prop]
                }
            },
            set(target, prop, value, receiver){
                const updated = Reflect.set(target, prop, value)

                if(methods.includes(prop))
                    callback(target)
                
                return updated
            }
        })
    }
}