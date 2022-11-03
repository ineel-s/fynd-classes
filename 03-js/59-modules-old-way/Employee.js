class Employee extends Person {
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