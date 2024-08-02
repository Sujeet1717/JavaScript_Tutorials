
// Inheritance in Javascript - child parent relationship - child can inherit the properties of parent class
 
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)                                       // super will refer to the username coming from the User class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher = new Teacher("sujeet", "sujeet@gmail.com", "123456789")
teacher.logMe()
teacher.addCourse()

const login = new User("Priyanks")
login.logMe()

console.log(teacher instanceof User);         // true
console.log(login instanceof User);           // true
console.log(teacher==login);                  // fasle