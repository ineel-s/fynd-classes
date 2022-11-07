const employment = {
    role: 'Accountant',
    dept: 'Finance'
}
const john = {
    name: 'John Doe',
    'company name': 'Fynd',
    age: 32,
    address: {
        city: 'Mumbai',
        pinCode: 400100
    },
    emails: [
        'john.doe@gmail.com',
        'john.doe@fynd.com'
    ],
    ...employment
};

const johnCopy = {
    ...john // name: john.name (copy by value), 'company name': john['company name'], age: john.age, address: john.address (copy by reference), emails: john.emails (copy by reference)
};

johnCopy.age++; // john.age is still 32
johnCopy['company name'] = 'Reliance';

// johnCopy.address and john.address refer to the SAME object in memory
johnCopy.address.pinCode = 400099; // john.address.pinCode has changed

console.log( john );
console.log( johnCopy );