
// Hositing = it defines all declartions at the top, not initialization 
// variable most be initialized before use
// if let and const variables are not initialzed will throw an error

i = 10
console.log(i);
var i              // as var is global variable

i1= 10
console.log(l1);         // Cannot access 'i1' before initialization
let i1

i2= 10
console.log(l2);         // Cannot access 'i2' before initialization
let i2

y = 200
let y        
console.log(y);               // Cannot access 'y' before initialization

let x
console.log(x);           // x is undefined
x= 10

// so best and correct way of hoisting is
let y1 = 100
console.log(y1);

let y2        
y2 = 200
console.log(y2);

// ................................................................ 

function user(user,name){

    function  details(user,name){
        user = user
        name = name
        return this
    }
    
    details(123,"Sujeet")
    console.log(this)
    return console.log(user +" "+ name);
}
user(111,"ashish")

const object = {
    id: 123,
    name: "Mulsan",
    Addres: "Pune",
    designation: function(){
        console.log(` The Company name is ${this.name} and address is ${this.Addres}`)   
        
    }
}


// With the bind() method, an object can borrow a method from another object. 
const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);
 //console.log(person.fullName());
 console.log(fullName()); 


 // this key word for current context
class User{

    constructor(name, number){
        this.name = name
        this.number = number 
        console.log(`welcome on board ${this.name}`);
    }
}

const user1 = new User("Sujeet",123)
//console.log(user1)
eval(user1)