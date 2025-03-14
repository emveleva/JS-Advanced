function solve(){
    let people = [];

    class Person {
        constructor(firstName, lastName, age, email){
            this.firstName = firstName,
            this.lastName = lastName,
            this.age = age, 
            this.email = email
        }
        toString(){
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
        }
    }

    people.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    people.push(new Person('SoftUni'));
    people.push(new Person('Stephan', 'Johnson', 25));
    people.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));




    
    return people;

}
