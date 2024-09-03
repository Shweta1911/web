var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, address, age, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.setId = function (id) {
        this.id = id;
    };
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.setfirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.getfirstName = function () {
        return this.firstName;
    };
    Employee.prototype.setlastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.getlastName = function () {
        return this.lastName;
    };
    Employee.prototype.setaddress = function (address) {
        this.address = address;
    };
    Employee.prototype.getaddress = function () {
        return this.address;
    };
    Employee.prototype.setage = function (age) {
        this.age = age;
    };
    Employee.prototype.getage = function () {
        return this.age;
    };
    Employee.prototype.setsalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getsalary = function () {
        return this.salary;
    };
    Employee.prototype.raiseSalary = function () {
        this.salary = this.salary + this.salary * 0.3;
    };
    Employee.prototype.printInfo = function () {
        console.log("Id = ".concat(this.id));
        console.log("firstName = ".concat(this.firstName));
        console.log("lastName = ".concat(this.lastName));
        console.log("address = ".concat(this.address));
        console.log("age = ".concat(this.age));
        console.log("salary = ".concat(this.salary));
    };
    return Employee;
}());
var emp = new Employee(1, "Shweta", "Kamble", "Miraj", 22, 50000);
emp.printInfo();
emp.raiseSalary();
emp.printInfo();
