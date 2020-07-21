class ProxyFactory{

    static create(object, methods, callback){

        return new Proxy(object, {
            get(target, prop, receiver){
                if(typeof(target[prop]) == typeof(Function) && methods.includes(prop)){
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
                if(typeof(target[prop]) == typeof(Function) && methods.includes(prop)){
                    return function(){
                        console.log(`${prop} disparou a armadilha`)
                        Reflect.set(target, prop, value)
                        callback(target)
                        return target[prop] = value
                    }
                }
                else{
                    return Reflect.set(target, prop, value)
                }
            }
        })

    }

}