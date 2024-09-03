//Inheritance (is a relationship)
//protected can be accessed inside child class
class Person{
    protected name:String
    protected age:Number
    protected address:String

}


class Employee extends Person{
    id:Number
    sal:Number
}

