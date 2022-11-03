import Human, { message as msg } from './Person.js';

class Employee extends Human {
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

console.log( msg );

export {
    Employee
}