//Association one to many
class Employee{
    private id:Number
    private name:String
    private sal:Number

    constructor(id:Number,name:String,sal:Number)
    {
        this.id=id
        this.name=name
        this.sal=sal
    }

    printInfo(){
        console.log(`id=${this.id} , name=${this.name}, sal=${this.sal}`)
    }
}

class Company{
    private name:String
    private address:String

    private employees:Employee[]=[]

    constructor( name:String,address:String){
        this.name=name
        this.address=address
    }

    recruit(name:String,sal:Number){
        const id=this.employees.length+1
        const employee=new Employee(id,name,sal)
        this.employees.push(employee)
    }

    printCompanyDetails(){
        console.log(`Name is ${this.name} , address is ${this.address}`)
        for(const employee of this.employees){
            employee.printInfo()
        }
    }
}

const company=new Company('Emtec','Pune')

company.recruit('Employee1',100000)
company.recruit('Employee2',100000)
company.recruit('Employee3',100000)
company.recruit('Employee4',100000)
company.recruit('Employee5',100000)
company.recruit('Employee6',100000)
company.recruit('Employee7',100000)
company.recruit('Employee8',100000)

company.printCompanyDetails()