class Person{
    name:String
    address:String
    age:Number
    Phone:String
    constructor(name:String,address:String,age:Number,Phone:String){
        console.log("Inside the constructor")
        this.name=name
        this.address=address
        this.age=age
        this.Phone=Phone
        //called automatically once obj is created
        //is called once for every obj
        //declared using keyword constructor
        //Every class must have one constructor
        //if no explicit constructor the  default constructor is called by ts
    }
    //
    // constructor(){
    //     console.log("Inside the constructor")
    //     this.name=''
    //     this.address=''
    //     this.age=0
    //     this.Phone=''
    // }
}

// const person1=new Person()
// person1.name="Shweta"
// person1.address="abc"
// person1.age=22
// console.log(person1)

// const person2=new Person()
// person2.name="Shweta"
// person2.address="abc"
// person2.age=22
// person2.Phone='12345'
// console.log(person2)

const person1=new Person("Shweta","abc",22,'123456789')
console.log(person1)