import { Employee } from './Employee.js';

const john = new Employee( 'John', 32, 'Accountant', 'Finance' );
john.celebrateBirthday();
john.promote();
console.log( john );

const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' );
jane.celebrateBirthday();
jane.promote();
console.log( jane );