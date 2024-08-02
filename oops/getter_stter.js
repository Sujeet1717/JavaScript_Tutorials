class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()     
    }
    set email(value){                         
        this._email = value
    }

    get password(){
        return `${this._password}valid`
    }

    set password(value){
        this._password = value
    }
}

const user = new User("sujeetdane@mulsanit.com", "123456789")
console.log(user.email);
console.log(user)
console.log(user.password);


// always use return to send the value to the function
/* Intead of this.email or this.password in getter and setter we have to use new variable, because the stack overflow,
    the function is not able to decide from where to set the value, constructor or setter method. So, declare new variable
    to get and set the value with the current context this. */