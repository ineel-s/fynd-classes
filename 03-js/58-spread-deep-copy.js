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
    ]
};

// "deep copy"
const johnCopy = {
    ...john,
    // spouse: 'Jane',
    // name: 'Jonathan'
    address: {
        ...john.address // city: 'Mumbai', pinCode: 400100
    },
    emails: [
        ...john.emails
    ]
};

johnCopy.address.pinCode = 400099;
johnCopy.emails[0] = 'john.doe@yahoo.com';
johnCopy.emails.push( 'john.doe@outlook.com' );

console.log( john );
console.log( johnCopy );