// IIFE = Immediately Invoked function Expression 
// Usage  - to immediate execute the function after starting the application
//        - to stop the pollution or garbage value done by the global variables 

(function chai(){                      // function to iife
    return console.log("Hello")
})();                                  // execute tow iife function after ending the first function with ;

(()=> (console.log("Hello Hello")))();    // arrow function to iife

((name)=> (console.log(`User name of the Employe is ${name}`)))("Sujeet")  // arrow function with parameter

