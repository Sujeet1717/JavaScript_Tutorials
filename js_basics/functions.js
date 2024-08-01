function text(){                            // function defination
    console.log("Hello");                   // function body
}

text()                   // text() is function execution and only text is function reference

// ------------------------------------------------------------------------------------------------------------- 

// function with parameters
function addNumbers(num1,num2){
    return num1+num2                        // it will return 5 but not print result
}

addNumbers(2,3)

// ------------------------------------------------------------------------------------------------------------- 
function addNum(n1,n2){
    num3 = n1+n2
    return console.log(num3)               // it will print the result
}
 addNum(2,3)

 // ------------------------------------------------------------------------------------------------------------- 

// rest operator in function for multiple arguments

function calculateSales(...n1){
    return console.log(n1);                  // it will return an array of all the arguments coming as an parameter
}

calculateSales(100,200,300,400)



function calculateSales1(v1,v2,...n2){
    return console.log(n2);                  // it will return an array of arguments coming after to 2 parameter
}

calculateSales1(100,200,300,400)

// ------------------------------------------------------------------------------------------------- 
// function for fetching the values from object using  key 


const details = {
    id: "Mulsan101",
    name: "Sujeet",
    Designation :" Wen Developer",
    Address:" Pune"
}

function handle(anyObject){
    console.log(`Username is ${anyObject.name}`)
}

handle(details)

// or can also be direct used to passing key and value

handle({name : "Mulsan"})


// function for fetching the values from array using index position

const arr = [100,200,300,400,500]

function fetchArrayValues(anyArray){
 console.log(anyArray[2])
 return anyArray[1]
}

console.log(fetchArrayValues(arr))        

console.log(fetchArrayValues([111,222,333,444,555,666,777]))          // directly pasing array in argument









