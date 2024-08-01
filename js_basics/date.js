let date = new Date("2024-07-11")
console.log(date);

console.log(Date.now());    // current date in millisecond format
console.log(date.getDay())      // return the day of the week
console.log(date.getMonth()+1);    // By-default the month start from 0, so add 1 to get the get the exact month
console.log(date.getDate());       // return the date
console.log(date.getFullYear());

console.log(date.toString());               //   Thu Jul 11 2024 05:30:00 GMT+0530 (India Standard Time)
console.log(date.toISOString());            //   2024-07-11T00:00:00.000Z
console.log(date.toLocaleString());         //   7/11/2024, 5:30:00 AM
console.log(date.toLocaleDateString());



