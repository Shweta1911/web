class Car{
    model:String
    company:String
    price:String
    color:String
    constructor(model:String,company:String,price:String,color:String){
        this.model=model
        this.color=color
        this.price=price
        this.company=company
    }

    printInfo(){
        console.log(`Model name is ${this.model}`)
        console.log(`company name is ${this.company}`)
        console.log(`price name is ${this.price}`)
        console.log(`color name is ${this.color}`)

    }
}    

const c1=new Car("Scorpio","abc","700000","Black")
c1.printInfo()
console.log('-------')
const c2=new Car("Duster","abc","700000","Brown")
c2.printInfo()