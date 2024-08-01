const num = 101
console.log(num);
console.log(typeof(num));             // number type

// standard way of creating a number
const num1 = new Number(102)
console.log(typeof(num1));             // object type
console.log(num1);

// Math Functions
const num2 = new Number(101.523)
const num3 = new Number(101.123)

console.log(num2.toFixed(1));            // to fixed decimal
console.log(num2.toPrecision(3));        // fixed + round-off
console.log(Math.round(num2));           // round-off
console.log(Math.ceil(num3));            // round to max close value 
console.log(Math.floor(num3));           // round to min close value
console.log(Math.abs(-17));              // convert negative to positive

console.log(Math.random());              // return random value between 0 to 1
console.log((Math.random()*10) +1 );     // return value from 1 excluding 0

// if we have to declare the random value between any range

const min  = 10
const max = 100
console.log(Math.round(Math.random()*((max-min+1)+min)));