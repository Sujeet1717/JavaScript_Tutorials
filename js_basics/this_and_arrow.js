const object = {
    id: 123,
    name: "Mulsan",
    Addres: "Pune",
    designation: function(){
        console.log(` The Company name is ${this.name} and address is ${this.Addres}`)   
        
    }
}

// this refer to the current context i.e current value in the scope in object.
// this global scope return the empty object{} value not refer any context

console.log(this);



object.designation();       
object.name = "TSYS"      // context of the name can be changed outside the block scope. 
object.designation()    

//-----------------------------------------------------------------------------------------------------------
// this will not work inside normal function and arrow funtion

const calculate = function(){
        let username = " TCS"
        console.log(`company name is ${this.username}`);
}

calculate()             // return undefined because this will not work inside function

// -------------------------------------------------------------------------------------------------

// arrow function - remove function and add => after () braces

// this is Explicit way to arrow function defination it contain return keyword and code inside {}
 const chai = ()=>{
    return console.log("Chai aur code");
 }
 chai()


 // Implicit arrow function defination
const chaiwala = ()=> ( console.log("Chai Wala"))

chaiwala()

const chaiwala1 = ()=> ({username:"Mulsan Technology Pvt Ltd"})
console.log(chaiwala1())

const chaiwala2 = ()=> (obj2 = {id: 112233,u_name: " Jai Shree Ram"})

console.log(chaiwala2())


