var Customer = /** @class */ (function () {
    function Customer(customerId, customerName, balance) {
        this.customerId = customerId;
        this.customerName = customerName;
        this.balance = balance;
    }
    Customer.prototype.printInfoCustomer = function () {
        console.log("id=".concat(this.customerId, " , name=").concat(this.customerName, " , balance=").concat(this.balance));
    };
    return Customer;
}());
var Bank = /** @class */ (function () {
    function Bank(bankName, bankLocation) {
        this.customers = [];
        this.bankLocation = bankLocation;
        this.bankName = bankName;
    }
    Bank.prototype.printInfo = function () {
        console.log("Bank Name=".concat(this.bankLocation, " , Bank Location=").concat(this.bankName, ", "));
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            customer.printInfoCustomer();
        }
    };
    Bank.prototype.createAccount = function (customerName, balance) {
        var id = this.customers.length + 1;
        var customer = new Customer(id, customerName, balance);
        this.customers.push(customer);
    };
    Bank.prototype.closeAccount = function (customerid) {
        console.log("cust id =".concat(customerid, ", ").concat(typeof customerid));
        this.customers.splice(customerid - 1, 1);
    };
    Bank.prototype.deposit = function (amount, customerid) {
        this.customers[customerid].balance = this.customers[customerid].balance + amount;
        console.log("Current balance is ".concat(this.customers[customerid].balance));
    };
    Bank.prototype.withdraw = function (amount, customerid) {
        this.customers[customerid].balance = this.customers[customerid].balance - amount;
        console.log("Current balance is ".concat(this.customers[customerid].balance));
    };
    Bank.prototype.currentBalance = function (customerid) {
        console.log("Current balance is ".concat(this.customers[customerid].balance));
    };
    return Bank;
}());
var bank = new Bank('SBI', 'Pune');
bank.createAccount('Customer1', 100000);
bank.createAccount('Customer2', 200000);
bank.createAccount('Customer3', 300000);
bank.createAccount('Customer4', 400000);
bank.createAccount('Customer5', 500000);
bank.createAccount('Customer6', 600000);
bank.createAccount('Customer7', 700000);
bank.createAccount('Customer8', 800000);
bank.createAccount('Customer9', 900000);
bank.createAccount('Customer10', 100000);
bank.printInfo();
console.log("---------");
bank.closeAccount(10);
bank.printInfo();
console.log("---------");
bank.deposit(5000, 1);
bank.currentBalance(1);
console.log("---------");
bank.withdraw(5000, 1);
bank.currentBalance(1);
