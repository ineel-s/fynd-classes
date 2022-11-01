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

class Employee extends Person {
    // constructor( name, age ) {
    //     super( name, age );
    // }
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    // overrides the Person::celebrateBirthday
    celebrateBirthday() {
        super.celebrateBirthday();
        console.log( `Happy birthday to ${this.name}!` );
    }
}

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.celebrateBirthday();
john.promote();
console.log( john );

const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );
jane.celebrateBirthday();
jane.promote();
console.log( jane );