// From Number to String and Boolean 

const a = 17

const b = String(a)
const c = Boolean(a)

console.log(typeof b);
console.log(b);

console.log(typeof c);
console.log(c);


// From String to Number and Boolean 

const d = "Sujeet"
const e = "17"
const i = ""
const k = null;

const f = Number(d)
const g = Boolean(d)
const h = Number(e)
const j = Number(i)
const l = Number(k)

console.log(typeof f);         
console.log(f)

console.log(typeof g);
console.log(g)

console.log(typeof h);
console.log(h)

console.log(typeof j);
console.log(j)

console.log(typeof l);
console.log(l);


console.table([f,g,h,j,l]);

// from Boolean to String and Number 

const aa = true

const bb = Number(aa)
const cc = String(aa)

console.log(typeof bb);
console.log(bb);

console.log(typeof cc);
console.log(cc);

// --------------------------------------------------------------------------------------------------------------- 

// increament operator example

let a1 = 3
let b1 = a1++     // postfix increament

console.log(a1);
console.log(b1);

let c1 = 3
let d1 = ++c1     // postfix increament

console.log(c1);
console.log(d1);

console.table([a1,b1,c1,d1])

let suj;
console.log(suj)
console.log(typeof suj)


// prefix and postifx value
 let postfix = 10
 console.log(` Value of postfix +is ${postfix++}`);   // first print number then increament

 let prefix = 10
 console.log(` Value of prefix is ${++prefix} `);      // first increamentan and then print number