const person:
{   name:String,
    adress:String,
    age:Number,
    phone:String,
    email:String
}=
{
    name:"Shweta",
    adress:"Miraj",
    age:22,
    phone:'12334567',
    email:"abc@gmail.com"
}

console.log(person)

function function1(model:String,company:String,cpu:String,ram:String){
    this.model=model
    this.company=company
    this.cpu=cpu
    this.ram=ram
}
const c1=function1("abc","abc","abc","abc")
console.log(c1)