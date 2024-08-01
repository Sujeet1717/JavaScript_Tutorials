// for loop

// basic for loop
const myArray = ["Sujeet","Ashish","Sudhakar","Priyanka"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// print number from 1 to 10
for (let index = 1; index <= 10; index++){
    console.log(index);
}

// nested for loop
// printing table of 10 
for(let i = 10;i <=10; i++){
    for (let j = 1; j <= 10; j++) {
    console.log(i + "*" + j +"=" + i*j);        
    }
}

// for loop fpr print the table from 1 to 5
for(let i=1; i<=5;i++){
    for(let j=1;j<=10;j++){
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

// for loop with break and continue keywords
for (let index = 1; index < 10; index++) {
    if(index==5){
        console.log(" Break the loop");
        break                                // break thye loop when it reach the index
    };
    console.log(index);
}

for (let index = 1; index < 10; index++) {
    if(index==5){
        console.log(" Continue the loop");
        continue                             // skip the condition index value and continue after it till last index
    };
    console.log(index);
}


// terniary operator
const a = 100
 a > 80 ? console.log(`value of a is ${a}`) : console.log("Value is false")

 // syntax ( condition ? true : false)

 // nullish coalesing operator
  const v1= 10 ?? 20
  console.log(v1);

  const v2 = null ?? 20
  console.log(v2);

  const v3 = 10 ?? null
  console.log(v3);

  const v4 = null ?? undefined
  console.log(v4);
  
  const v5 = null ?? undefined ?? 10 ?? 20 
  console.log(v5);

  


