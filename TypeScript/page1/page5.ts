class Person{
    private name:String
    private address:String
    private age:Number
    private Phone:String
    constructor(name:String,address:String,age:Number,Phone:String){
        console.log("Inside the constructor")
        this.name=name
        this.address=address
        this.age=age
        this.Phone=Phone
    }

    setAge(age:number){
        if(age>0 && age<100){
            this.age=age
        }
        else{
            console.log("Error")
        }
        
    }
    setaddress(address:String){
        this.address=address
    }
    setPhone(Phone:String){
        this.Phone=Phone
    }
    setName(name:String){
        this.name=name
    }
    
    printInfo(){
        console.log(`name is ${this.name}`)
        console.log(`address is ${this.address}`)
        console.log(`age is ${this.age}`)
        console.log(`Phone is ${this.Phone}`)

    }

}

const p1=new Person("Shweta","abc",22,'123456789')
p1.setAge(101)
p1.printInfo()
console.log("----")
p1.setAge(40)
p1.printInfo()


// p1.age=-100
