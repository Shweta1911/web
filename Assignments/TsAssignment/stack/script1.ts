class Stack{
    elements : number[] = [];


    pushele(ele:number){
        this.elements.push(ele);
    }
    popele(){
        this.elements.pop()
    }
    traverse(){
        console.log(this.elements.map((value)=>{
            return value
        }))
    }
}

const stack=new Stack()

stack.pushele(1);
stack.pushele(2);
stack.pushele(3);
stack.pushele(4);
stack.pushele(5);

stack.traverse()
console.log()
stack.popele()
stack.traverse()
