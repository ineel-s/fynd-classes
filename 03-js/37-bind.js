// bind() is a method of a function

const john = {
    name: 'John Doe',
    age: 32,
    celebrateBirthday() {
        this.age++;
    }
};

const jane = {
    name: 'Jane Doe',
    age: 28
};

// jane is able to "borrow" john's celebrateBirthday method to increase her age
// john.celebrateBirthday.call( jane );

const janeCb = john.celebrateBirthday.bind( jane );
janeCb(); // john.celebrateBirthday.call( jane );
janeCb();
janeCb();
janeCb();
janeCb();
janeCb.call( john ); // the "this" will still be jane

console.log( janeCb ); // prints a function

console.log( jane );