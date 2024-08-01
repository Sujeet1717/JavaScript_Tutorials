const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for_in loop for iterate in Object
for (const key in myObject) {
    console.log(`${key} shortcut is for : ${myObject[key]}`);
}


// for-in loop to iterate in array
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


// for-in loop is not used to iterate in map 
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }