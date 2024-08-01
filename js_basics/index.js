// constant and variable use 

const id = 123              // un-mutable means can not be changed
var name = "Sujeet"         // mutable means can be changed
let Address = "Pune"
location = "1223.123.asd"   // variables can be defined with let, var or no keyword. mostly use let.
let designation             // if the value is not assigned then default it is undefined.
// prefer not to use var keyword beacause of issue in block scope and functional scope 
console.log([id]);   // console.log is used to print the single object

console.table([id,name,Address,location,designation])   // console.table is used to print the multiple object in a table 
