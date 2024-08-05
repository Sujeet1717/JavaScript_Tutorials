//  Inherit the properties of one object to another using the prototype

// Creating and Object
const User={
    username: "Sujeet",
    address : " Pune",
    details : function(){
        console.log(` The user is ${this.username}`);
    }
}

const userDetails={
    designation: "Software Engineer",
    experties : " Java and Data Analytics",
    printMe : function(){
        console.log(` The designation of user is ${this.designation} and expert in ${this.experties}`);
    }
}

//User.details()
 // userDetails.printMe()

// As User and userDetails both are object can they use the prototype function to get each other functions ?
// old way of inheritance

//userDetails.__proto__ = User          // means userDetaisl can inherit the function of User
// userDetails.details()

// New way to inherit
Object.setPrototypeOf(userDetails,User)          // 1stargument - Inhert to object, 2nd - Inhert function of object from
userDetails.details()                             // means userDetaisl can inherit the function of User