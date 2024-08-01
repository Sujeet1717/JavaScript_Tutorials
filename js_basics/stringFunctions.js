let name = "    my name is sujeet Dande and I'm a frond-end Developer. I have overall 3+ yrs of experinece     "


console.log(name)
console.log(name.length);

let trimm = name.trim()
console.log(trimm);

// Index position functions
console.log(name.charAt(8));
console.log(name.charCodeAt(2));
console.log(name.at(4));

/* substring functions
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)

slice() extracts a part of a string and returns the extracted part in a new string.

substring() is similar to slice().
The difference is that start and end values less than 0 are treated as 0 in substring().

substr() is similar to slice().
The difference is that the second parameter specifies the length of the extracted part.
*/

console.log(name.slice(2,25));
console.log(name.slice(-10.-2));
console.log(name.substring(3,26));
console.log(name.substr(3,6));

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.concat("in it industry"))

console.log(name.trim());
console.log(name.trimStart())
console.log(name.trimEnd())

let text = "5";
console.log(text.padStart(4,"0"));
console.log(text.padEnd(5,"0"));
console.log(text.repeat(10))


// String Search and Replace Function
console.log(name.replace("sujeet","Sujeet"));
console.log(name.replaceAll("s","S"))

// Converting a String to an Array
let Address = "Pune,Mumbai,Indore"
let Address1 = "Pune|Indore|Latur"
let Address2 = "Pune  Indrore Dhule"
console.log(Address.split(","));
console.log(Address1.split("|"));
console.log(Address2.split(" "));


//JavaScript String Search
let sts = "Today is a very nice day"
console.log(sts.indexOf("very"));
console.log(sts.lastIndexOf("a"));
console.log(sts.search("is"));

console.log(sts.endsWith("pune"))
console.log(sts.includes("nice"));

console.log(sts.match("e"));