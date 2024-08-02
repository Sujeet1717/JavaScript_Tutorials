
// static function- can we don't want to share the private or important data with child class. We make the function or class static 
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `1234568789`
    }
}

const user = new User("sujeet")
//console.log(user.createId())   // static method can not be accesed

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const user1 = new Teacher("Priyanks", "priyanka@gmailwala.com")
user1.logMe()
console.log(user1.createId());              // child class instance can not access static method from parent class
