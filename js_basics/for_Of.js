
// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// for of loop to iterate in array
for (const num of arr) {
    console.log(num);
}

// for of loop to iterate in string
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('UK', "United Kingdom")


console.log(map);

// for of loop to iterate in map
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// Object is not iterable - so instead of for-of we use for-in

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
