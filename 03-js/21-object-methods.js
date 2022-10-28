// celebrateBirthday is a 'method' (a property whose value is a function)
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
    celebrateBirthday: function() {
        console.log( this );
        this.age++;
    },
    relocate( city, pinCode ) { // same as relocate: function() { }
        this.address.city = city;
        this.address.pinCode = pinCode;
    }
};

john.setNickname = function( nickname ) {
    this.nickname = nickname;
};

john.setNickname( 'Johnny Bravo' );
john.celebrateBirthday();
john.relocate( 'Pune', 410100 );
console.log( john );