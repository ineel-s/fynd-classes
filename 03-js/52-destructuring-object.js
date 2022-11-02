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

// const name = john.name, city = john.address.city, pinCode = john.address.pinCode, primaryEmail = john.emails[0];
const {
    age: yearsOld = 18,
    'company name': companyName,
    name,
    spouse = 'Single',
    address: {
        city: location,
        pinCode
    },
    emails: [
        primaryEmail
    ]
} = john;

console.log( yearsOld, companyName, name, spouse, location, pinCode, primaryEmail );