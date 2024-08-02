
// Object Literal = Object is a collection of properties(const & let i.e variable) and methods(function) 
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
console.log(user.username)                    // get username
console.log(user.getUserDetails());            // get function getUserDetails()  
console.log(this);                             // this will return all the properties and function of current context


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
 
// new  = 1) it will create empty object
//        2) call constructor function
//        3) pack arguments and inject in instance 



const user1 = new User("hitesh", 12, true)                
const user2 = new User("ChaiAurCode", 11, false)
console.log(user1.constructor);
console.log(user2);

