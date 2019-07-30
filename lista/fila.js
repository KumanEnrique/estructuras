class Fila {
    constructor(){
        this.items = {}
        this.front = 0//inicio de fila
        this.end = 0//fin de fila
    }
    agregar(dato){
        this.items[this.end] = dato
        this.end++
    }
    salir(){
        if(this.front ===this.end){
            return null
        }
        const data = this.items[this.front]
        delete this.items[this.front]
        this.front ++
        return data
    }
    longitud(){
        return this.end  - this.front
    }
    vacia(){
        if(this.longitud() === 0){
            return true
        }else{
            return false
        }
    }
    peek(){
        if(this.longitud() === 0){
            return null
        }
        return this.items[this.front]
    }
    imprimir(){
        if(this.longitud() === 0){
            return null
        }
        let result = ""
        for(let i=this.front;i<this.end;i++){
            result += this.items[i] + " "
        }
        return result
    }
}

const fila = new Fila()
console.log(fila.agregar("a") )
console.log(fila.agregar("b") )
console.log(fila.agregar("c") )
console.log(fila.salir()) 
console.log(fila.imprimir() )