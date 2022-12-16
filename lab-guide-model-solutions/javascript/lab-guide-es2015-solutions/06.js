const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: ['Black', 'Green', 'Yellow', 'Purple', 'Red', 'White']
    },
    calculateDiscoutedPrice: function (percentage) {
        return (this.price * (100 - percentage)) / 100;
    },
};

// shallow copy
const iPhone11ShallowCopy = {
    ...iPhone11
};


// deep copy (except for the function calculateDiscountedPrice, which is shared)
const iPhone11DeepCopy = {
    ...iPhone11,
    specs: {
        ...iPhone11.specs,
        memory: {
            ...iPhone11.specs.memory
        },
        cameras: {
            ...iPhone11.specs.cameras
        },
        availableColors: [ ...iPhone11.specs.availableColors ]
    }
};

iPhone11ShallowCopy.specs.color = 'Rose';

console.log( 'iPhone11 = ', iPhone11 ); // color is 'Rose'
console.log( 'iPhone11ShallowCopy = ', iPhone11ShallowCopy ); // color is 'Rose'
console.log( 'iPhone11DeepCopy = ', iPhone11DeepCopy ); // color is 'White'