class Customer{
    customerId:Number
    customerName:String
    balance:number
    constructor(customerId:Number,customerName:String,balance:number
        ){
        this.customerId=customerId
        this.customerName=customerName
        this.balance=balance
    }
    printInfoCustomer(){
        console.log(`id=${this.customerId} , name=${this.customerName} , balance=${this.balance}`)
    }
}



class Bank{
    bankName:String
    bankLocation:String
    customers:Customer[]=[]

    constructor(bankName:String,bankLocation:String){
        this.bankLocation=bankLocation
        this.bankName=bankName
    }
    printInfo(){
        console.log(`Bank Name=${this.bankLocation} , Bank Location=${this.bankName}, `)
        for(const customer of this.customers){
            customer.printInfoCustomer()
        }
    }
    createAccount(customerName:String,balance:number){
        const id=this.customers.length+1
        const customer=new Customer(id,customerName,balance)
        this.customers.push(customer)
    }

    closeAccount(customerid:number){
        console.log(`cust id =${customerid}, ${typeof customerid}`)
        this.customers.splice(customerid-1,1)

    }
    deposit(amount:number,customerid:number){
        this.customers[customerid].balance=this.customers[customerid].balance+amount
        console.log(`Current balance is ${this.customers[customerid].balance}`)
    }
    withdraw(amount:number,customerid:number){
        this.customers[customerid].balance=this.customers[customerid].balance-amount
        console.log(`Current balance is ${this.customers[customerid].balance}`)
    }
    currentBalance(customerid:number){
        console.log(`Current balance is ${this.customers[customerid].balance}`)
    }
}

const bank=new Bank('SBI','Pune')

bank.createAccount('Customer1',100000)
bank.createAccount('Customer2',200000)
bank.createAccount('Customer3',300000)
bank.createAccount('Customer4',400000)
bank.createAccount('Customer5',500000)
bank.createAccount('Customer6',600000)
bank.createAccount('Customer7',700000)
bank.createAccount('Customer8',800000)
bank.createAccount('Customer9',900000)
bank.createAccount('Customer10',100000)

bank.printInfo()
console.log("---------")
bank.closeAccount(10)
bank.printInfo()
console.log("---------")

bank.deposit(5000,1)
bank.currentBalance(1)
console.log("---------")

bank.withdraw(5000,1)
bank.currentBalance(1)
