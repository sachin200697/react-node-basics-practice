//problem without dependency injection
// a object is created directly in a class and it 
// this object changes then we also have to change to class
class User {
    getUserName() {
        return 'SK';
    }
}

class UserServiceWithoutDependencyInjection {
    getName() {
        const user = new User();
        return user.getUserName();
    }
}

const userServiceWithoutDependencyInjection = new UserServiceWithoutDependencyInjection();
console.log(userServiceWithoutDependencyInjection.getName());

// solution 1
class UserService {
    // passing user as constructor parameter to inject User object
    constructor(user){
        this.user = user;
    }
    getName(){
        return this.user.getUserName();
    }
}
const userService = new UserService(new User());
console.log(userService.getName());


// solution 2
class Person {
    getUserName() {
        return 'SK-Person';
    }
}
userService.person = new Person();
console.log(userService.person.getUserName());


