// Explore..
    // what is static data member
    // how to declare and use it in JS
class Person {
    // we do not have to explicitly declare the data member
    nationality = 'Indian';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

const john = new Person( 'John', 32 );
john.celebrateBirthday();
console.log( john );

const jane = new Person( 'Jane', 28 );
jane.celebrateBirthday();
console.log( jane );