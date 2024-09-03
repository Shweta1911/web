class EmptyClass{
//Empty class
}

class Person{
    //no need to use let or const
    //Properties
    name:String
    address:String
    age:Number
    Phone:String
}

//object creation
//implicit
const person1=new Person()
person1.name="Shweta"
person1.address="abc"
person1.age=22
person1.Phone="1234567"
console.log('person1=',person1)


//Explicit
const person2:Person=new Person()
person2.name="Shweta"
person2.address="abc"
person2.age=22
person2.Phone="1234567"
console.log('person2=',person2)
