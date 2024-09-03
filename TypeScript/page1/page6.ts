

//Association one to one

class Address{
    city:String
    state:String
    country:String
    zipCode:String
    constructor(city:String,
        state:String,
       country:String,
        zipCode:String){

            this.city=city
            this.state=state
            this.country=country
            this.zipCode=zipCode

        }

        printAddress(){
            console.log(`city=${this.city}`)
            console.log(`state=${this.state}`)
            console.log(`country=${this.country}`)
            console.log(`zipCode=${this.zipCode}`)

        }
}

class Person{
    name:String
    address:Address
    age:Number
    constructor(name:String,city:String,state:String,country:String,zipCode:String,age:Number){
        console.log("Inside the constructor")
        this.name=name
        this.age=age
        this.address= new Address(city,state,country,zipCode)
        
    }
    printInfo(){
        console.log(`name=${this.name}`)
        console.log(`age=${this.age}`)
        this.address.printAddress()
    }
}

const p1=new Person("Shweta","Miraj","Mh","India","416410",20)
p1.printInfo()



class House{
    colour:String
    address:Address
    rooms:Number
    constructor(colour:String,city:String,state:String,country:String,zipCode:String,rooms:Number){
        this.colour=colour
        this.rooms=rooms
        this.address= new Address(city,state,country,zipCode)
        
    }
    printInfo(){
        console.log(`colour=${this.colour}`)
        console.log(`rooms=${this.rooms}`)
        this.address.printAddress()
    }
}
console.log("-----")
const h1=new House("White","Miraj","Mh","India","416410",5)
h1.printInfo()