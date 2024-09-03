var Employee = /** @class */ (function () {
    function Employee(id, name, sal) {
        this.id = id;
        this.name = name;
        this.sal = sal;
    }
    Employee.prototype.printInfo = function () {
        console.log("id=".concat(this.id, " , name=").concat(this.name, ", sal=").concat(this.sal));
    };
    return Employee;
}());
var Company = /** @class */ (function () {
    function Company(name, address) {
        this.employees = [];
        this.name = name;
        this.address = address;
    }
    Company.prototype.recruit = function (name, sal) {
        var id = this.employees.length + 1;
        var employee = new Employee(id, name, sal);
        this.employees.push(employee);
    };
    Company.prototype.printCompanyDetails = function () {
        console.log("Name is ".concat(this.name, " , address is ").concat(this.address));
        for (var _i = 0, _a = this.employees; _i < _a.length; _i++) {
            var employee = _a[_i];
            employee.printInfo();
        }
    };
    return Company;
}());
var company = new Company('Emtec', 'Pune');
company.recruit('Employee1', 100000);
company.recruit('Employee2', 100000);
company.recruit('Employee3', 100000);
company.recruit('Employee4', 100000);
company.recruit('Employee5', 100000);
company.recruit('Employee6', 100000);
company.recruit('Employee7', 100000);
company.recruit('Employee8', 100000);
company.printCompanyDetails();
