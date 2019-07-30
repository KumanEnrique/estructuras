class Pila{
    constructor(){
        this.items = {}
        this.end = 0
    }
    agregar(valor){
        this.items[this.end] = valor
        this.end++
    }
    eliminar(){
        if(this.end === 0){
            return null
        }else{
            const data = this.items[this.end-1]
            delete this.items[this.end -1]
            this.end--
            return data
        }
    }
    longitud(){
        return this.end -1
    }
    vacia(){
        if(this.end === 0){
            return true
        }else{
            return false
        }
    }
    peek(){
        if (this.end === 0){
            return null
        }else{
            const dato = this.items[this.end -1]
            return dato
        }
    }
    imprimir(){
        if(this.end === 0){
            return null
        }
        let elementos = ""
        for(let i =0;i<this.end;i++){
            elementos += this.items[i] + " "
        }
        return elementos
    }
}

let stack = new Pila();
stack.agregar("first")
stack.agregar("second")
stack.agregar("third")
console.log(stack.eliminar())
console.log(stack.eliminar())
console.log(stack.eliminar())
console.log(stack.imprimir()  )
console.log(stack)