// forEach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(`${val} using function callback`);
} )

coding.forEach( (item) => {
    console.log(`${item} forEach with Arrow function`);
} )

function printMe(item){
    console.log(item);
}

// directly passing the refernce of the function
coding.forEach(printMe)


// forEach(callback_function, index, Array)
coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);         // fetching the values by using the key name
} )

// myCoding.forEach ((item,index,arr) => {
//     console.log(item, index, arr);
// } )