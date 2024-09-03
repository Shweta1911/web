const num:Number=100
console.log(`num=${num},type=${typeof num}`)

const str:string="Shweta"
console.log(`str=${str},type=${typeof str}`)


const canVote:Boolean=true
console.log(`canVote=${canVote},type=${typeof canVote}`)


let myvar=undefined
console.log(`myvar=${myvar},type=${typeof myvar}`)


let myvar2:null=null
console.log(`myvar2=${myvar2},type=${typeof myvar2}`)

let myvar3:Number | string='hi'
console.log(`myvar3=${myvar3},type=${typeof myvar3}`)

let myvar4:any='hi'
console.log(`myvar4=${myvar4},type=${typeof myvar4}`)

const person={
    fname:'Shweta',
    age:22,
    address:'pune',
}
console.log(`person=${person},type=${typeof person}`)

const person1:Object={
    fname:'Shweta',
    age:22,
    address:'pune',
}
console.log(`person1=${person1},type=${typeof person1}`)

const person2:{fname:string,age:Number,address:string}={
    fname:'Shweta',
    age:22,
    address:'pune',
}
console.log(`person1=${person1},type=${typeof person1}`)


const num1:Number[]=[1,2,3,4,5]
console.log(`num1=${num1},type=${typeof num1}`)

const num2:Array<Number>=[1,2,3,4,5]
console.log(`num2=${num2},type=${typeof num2}`)

const str1:Array<string>=['hi','hello','hey']
console.log(`str1=${str1},type=${typeof str1}`)

