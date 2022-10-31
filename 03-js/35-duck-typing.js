const john = {
    name: 'John Doe',
    age: 32,
    // as long as the context object ("this") has an age which is a number this works
    celebrateBirthday() {
        this.age++;
    }
};

const jane = {
    name: 'Jane Doe',
    age: 28
};

john.celebrateBirthday();
console.log( john );

// jane is able to "borrow" john's celebrateBirthday method to increase her age
john.celebrateBirthday.call( jane );
console.log( jane );