// ES6 allow js to have class
// How to create class and use the function/methods using the class instance
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}000`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const user1 = new User("sujeet", "sujeetdande@gmail.com", "123456789")

console.log(user1.encryptPassword());
console.log(user1.changeUsername());



// behind the scene
// the same work can also be done using simple function

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}123`
}
User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const user2 = new User1("ashish", "ashish@gmail.com", "789456123")

console.log(user2.encryptPassword());
console.log(user2.changeUsername());