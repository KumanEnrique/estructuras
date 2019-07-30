class Nodo{
    constructor(data,next,prev){
        this.data = data
        this.next = next
        this.prev = prev
    }
}
class DoublelinkedList{
    constructor(){
        this.head = null//inicio de cola; cabezera -> X
        this.tail = null//fin de cola; cola -> cabezera -> X
        this.size = 0
    }
    addToHead(data){
        const newnode = new Nodo (data,this.head,null)
        if(this.head){
            newnode.next = this.head
            this.head.prev = newnode
            this.head = newnode
        }else{
            this.head = newnode
            this.tail = newnode
        }
        this.size++
    }
    addToTail(data){
        const newnode = new Nodo(data,null,this.tail)
        if(this.tail){
            newnode.prev = this.tail
            this.tail.next = newnode
        }else{
            this.tail = newnode
            this.head = newnode
        }
        this.size++
    }
    insertAt(data,index){
        if(index < 0 || index >= this.size){
            return null
        }
        const newnode = new Nodo(data,null,null)
        let current = this.head
        let previous 
        if(index === 0){
            newnode.next = current
            current.prev = newnode
            this.head = newnode
        }else{
            for(let i=0;i<index;i++){
                previous = current
                current = current.next
            }
            newnode.next = current
            newnode.prev = previous
            current.prev = newnode
            previous.next = newnode
        }
        this.size++
    }
    removeFromHead(){
        if(!this.head){
            return null
        }
        const valueToReturn = this.head.data
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head.prev = null
        }
        this.size--
        return valueToReturn
    }
    removeFromTail(){
        if(!this.tail){
            return null
        }
        const valueToReturn = this.tail.data
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else{
            this.tail = this.tail.prev
            this.tail.next = null
        }
        this.size--
        return valueToReturn
    }
    removeData(data){
        let current = this.head
        let previous = null

        while(current !== null){
            if(current.data === data){
                if(!previous){
                    return this.removeFromHead()
                }else if(!current.next){
                    return this.removeFromTail()
                }else{
                    previous.next = current.next
                    current.next.prev = previous
                }
                this.size--
                return current.data
            }
            previous = current
            current = current.next
        }
        return null
    }
    print(){
        let current = this.head
        let result = ""
        while(current){
            result += current.data + ' <--> '
            current = current.next
        }
        return result += "X"
    }
    reversePrint(){
        let current = this.tail
        let result = ""
        while(current){
            result += current.data + ' <--> '
            current = current.prev
        }
        return result += "X"
    }
    isEmpty(){
        if(this.size === 0){
            return true
        }else{
            return false
        }
    }
    getSize(){
        return this.size
    }
}
let listaD = new DoublelinkedList()
listaD.addToHead("hola1")
listaD.addToHead("hola2")
listaD.addToHead("hola3")
console.log(listaD.print())
console.log(listaD)
/* 
let obj = {
    hola1:{
        hola11:{
            hola111:{
                hola1111:"direccion correcta"
            }
        },
        hola12:"direccion12"
    },
    hola2:{
        hola21:{
            hola211:"direccion211"
        },
        hola22:"direccion2"
    },
    hola3:{
        hola31:{
            hola311:"direccion311"
        },
        hola32:"direccion3"
    }
}

function sal(objeto){
    newObjeto = objeto
    b = null
    while(typeof newObjeto == "object" ){
        b = Object.keys(newObjeto)[0]
        newObjeto = newObjeto[b]
    }
    console.log( newObjeto)
}
sal(obj) */