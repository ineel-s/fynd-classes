/*export default */class Person {
    nationality = 'Indian';

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    celebrateBirthday() {
        this.age++;
    }
}

/*export */const message = 'Hello, world';

// "named exports"
export {
    Person as default,
    message
};