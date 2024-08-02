// Lexical scope means  - the inner functions can access the properties of outer function 
 function outer(){
    let name = "Sujeet Dande"
    const number = 1234567890

    function inner(){
        console.log(`The Name of Author is: ${name}`)
    }
    inner()            // function execution
 }
outer()


 /* Closure - A closure is the combination of a function bundled together(enclosed) with refernces to its 
     surrounded state the (lexical environment) */

     function closure(){
        let closure1 = " The closure function"

        function lexical(){
            let lexi = "Example 1"
            console.log(lexi)
            console.log(closure1);
        }
        return lexical
     }

     const mufunc = closure()          // the scope of closure if ended but the memory and lexical scope is store in mufunc variable
     mufunc()                        // to execute the function use mufunc() will fetch all the information from the outer loop as well

     function closure1(){
        let closure1 = " The closure function"

        return function lexical1(){
            let lexi = "Example 2"
            console.log(lexi)
            console.log(closure1);
        }
        
     }

    const myfunc1 = closure1()
    myfunc1()
  





