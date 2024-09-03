class Employee{
    private id:Number
    private firstName:String
    private lastName:String
    private address:String
    private age:Number
    private salary:number

    setId(id:Number){
        this.id=id
    }
    getId(){
        return this.id
    }

    setfirstName(firstName){
        this.firstName=firstName
    }
    getfirstName(){
        return this.firstName
    }

    setlastName(lastName){
        this.lastName=lastName
    }
    getlastName(){
        return this.lastName
    }

    setaddress(address){
        this.address=address
    }
    getaddress(){
        return this.address
    }

    setage(age){
        this.age=age
    }
    getage(){
        return this.age
    }

    setsalary(salary){
        this.salary=salary
    }
    getsalary(){
        return this.salary
    }
    constructor(id:Number,firstName:String,lastName:String, address:String,age:Number,salary:number){
        this.id=id
        this.firstName=firstName
        this.lastName=lastName
        this.address=address
        this.age=age
        this.salary=salary
    }

    raiseSalary(){
        this.salary=this.salary+this.salary*0.3
    }
    printInfo(){
        console.log(`Id = ${this.id}`)
        console.log(`firstName = ${this.firstName}`)
        console.log(`lastName = ${this.lastName}`)
        console.log(`address = ${this.address}`)
        console.log(`age = ${this.age}`)
        console.log(`salary = ${this.salary}`)

    }
}

const emp=new Employee(1,"Shweta","Kamble","Miraj",22,50000)
emp.printInfo()
emp.raiseSalary()
emp.printInfo()


