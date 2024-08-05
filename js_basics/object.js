
// creation of singleton object
const obb = new Object;      // object constructor

// creation of literal Object
const obj = {
    id: "1",
    name: "Sujeet",
    address: "Pune",
    email: "sujeetdande5@gmail.com",
    mobile: "8602725348"
}

console.log(obj);
console.log(typeof obj);

console.log(obj.id)         // by-default the dataype of key is string
console.log(obj.email)
console.log(obj["email"])     // object key can also be assised in ["" as a string]

obj.email = "sujeetdande@mulsanit.com"       // updating an object key value
console.log(obj.email)

// object inside object

const obj1 = {
    id: "2",
    name: {
        first_name: "Sujeet",
        second_name: "Dande"
    },
    address: "Pune",
    email: "sujeetdande5@gmail.com",
    mobile: "8602725348"
}

console.log(obj1.name.first_name);        // calling object inside object

// merging mutiple object in one object

const obj2 = {
    id: "2",
    name: "Ashi8sh",
    address: "Indore",
    email: "ashishdande5@gmail.com",
    mobile: "9197244144"
}
const obj3 = {
    id1: "3",
    name1: "Sudhakar",
    address1: "Latur",
    email1: "sudhakardande5@gmail.com",
    mobile1: "9755725348"
}
const obj4 = {
    id2: "4",
    name2: "Priyanka",
    address2: "Khandapur",
    email2: "sujeetdande5@gmail.com",
    mobile2: "8913125348"
}

const obj5 = Object.assign({},obj2,obj3,obj4)
console.log(obj5);  


// or by spread method
 const obj6 = {...obj2,...obj3,...obj4}
 console.log(obj6);




// ---------------------------------------------------------------------------------------- 
 // object constructor

 const o =  new Object
 o.id= 123
 o.name = "Anna"
 o.address = "mulsan"

 console.log(o);

 console.log(Object.keys(o));      // get the keys of object
 console.log(Object.values(o));      // get the values of object
 console.log(Object.entries(o));      // get the key-value pair as an array of object
 
 console.log(o.hasOwnProperty("id"));      // return true if the key is present in object.

 
//  ------------------------------------------------------ 

// object de-structure

const {id} = obj          // o here is the object of which is depcreated
console.log(id);        // instead of using obj.id mutiple times now we can direct use id key

// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring - instead of using the person.firtsName and Obj.lastName we can destructre their keys 
  let {firstName, lastName, country = "US"} = person;
  console.log("The person name is "+ firstName ,lastName+" lives in "+country);

  // Destructuring- name is variable name for lastName 
let {lastName : name} = person;

console.log(name);




