class stack<T,s={},m=void>{
    private array: T[]

    constructor() {
        this.array = []
    }

    push(x:T){
       this.array.push(x)
    }
    pop(){
       this.array.pop()
    }
    display(){
        return this.array
    }
}

let l1=new stack<string>()
l1.push("kk")
l1.push("kb")
l1.push("rd")

 console.log(l1.display()) 
