class Queue{
    elements : number[] = [];

    enqueue(ele:number){
        this.elements.push(ele)
    }

    dequeue(){
        this.elements.splice(0,1)
    }
    traverse(){
        console.log(this.elements.map((value)=>{
            return value
        }))
    }
}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.traverse()
console.log("-------------------------")

queue.dequeue()

queue.traverse()
console.log("-------------------------")

queue.dequeue()

queue.traverse()
console.log("-------------------------")
