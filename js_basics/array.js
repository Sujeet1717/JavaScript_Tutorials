let arr = [1,2,3,4,5]

console.log(arr);

// basic array operation
arr.push(6)                        // add an element at end
console.log(arr);

arr.pop()                          // remove an element from end
console.log(arr);

arr.unshift(0)                     // add an element at begining
console.log(arr);

arr.shift()                       // remove an element from begining
console.log(arr);

// array addition using concat and spread method

let arr2 = ["A","B","C"]
let arr3 =["D","F","G"]
let arr4 = arr2.concat(arr3)
console.log(arr4);

let arr6 = [...arr2,...arr3]
console.log(arr6);

// Note - if we try to add array with arr using push it will form a array inside an array
arr2.push(arr3)
console.log(arr2);

//convert array element to string
console.log(typeof(arr2.join()))
console.log(arr2.join())

// array operations
console.log(arr2.includes("B"))         // return true if the array conatin the element else false
console.log(arr2.indexOf("C"))            // return the index of element in array 

// sub- array from original array
arr4 = [1,2,3,4,5,6,7,8]
console.log(arr.slice(1,5));           // return an array starting from index position and excluding the end index
console.log(arr4);                     // original array remain the same

console.log(arr4.splice(1,5));        // return an array including starting and end index
console.log(arr4);                    // original array is modified and splice array element are removed from original array

// Flat the element from array inside an array
arr5 = [1,2,3,4,[11,22,33],7,5,6,[111,222,333,444]]
console.log(arr5.flat(Infinity));     // infinity is the level of depth for flating the array inside an array


// check wheater a object is array or not
let a = "Sujeet"
console.log(Array.isArray(a));    // return true/false 

// create an array from string
console.log(Array.from(a));        // seprate each string with comma(,) and form an array

// create an areray from multiple objects
let id1 = 123
let id2 = 234
let id3 = 345
console.log(Array.of(id1,id2,id3));     // merge all the objects in one array





