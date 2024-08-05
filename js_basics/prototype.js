function user(username,number){
    this.username = username
    this.number= number
}

const u1 = new user("Sujeet",123456)
//console.log(u1)

// ............................................. ....
// create an object
const obj = {
    username : "Mulsan",
    address : "Pune",
    campanyDeatils : function(){
        console.log(` The Company name is ${this.username} and is located in ${this.address}`);
    }
}

// declaring and array
const arr = [1,2,3,4,5,6,7,8]

// creating a new method in Object prototype - user defined method/function
Object.prototype.changeName = function(){
    console.log(` the address of company is Kharadi`);
}
Object.prototype.myArray = function(){
    console.log(`Inside Array`);
}

// declaring a string
let stringg = "Welcome"

// as object is a super class and string is sub class, String is also an object, thus it can use the properties of Object.
//stringg.changeName()

// array can also use the methods from objects
// arr.myArray()

// --------------------------------- 
//  can object can use the prototype functions of String and Array
Array.prototype.myarray1 = function(){
    console.log("From array to object");
}

// obj.myarray1()                // obj.myarray1 is not a function error 

String.prototype.stringObj = function(){
    console.log("From String to Object");
}

obj.stringObj()               // obj.stringObj is not a function


// ................................................................ 
// can we access the prototype function of two sibiling classes type - String and Array 
stringg.myArray()                 // obj.stringObj is not a function error







