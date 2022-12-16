const iPhone11 = {
  name: "iPhone 11",
  manufacturer: "Apple",
  price: 699,
  specs: {
    color: "White",
    memory: { value: 128, unit: "MB" },
    cameras: { front: "12 MP Wide", rear: "12 MP Ultra Wide" },
    availableColors: ["Black", "Green", "Yellow", "Purple", "Red", "White"],
  },
  calculateDiscoutedPrice: function (percentage) {
    return (this.price * (100 - percentage)) / 100;
  },
};

// NOTE: arrow functions cannot be used with bind(). So we use the old function syntax.
// We have destructured when accepting the phone as an argument
function printPhoneDetails( { name, manufacturer : brand, calculateDiscoutedPrice } ) {
  // since the context is bound to the iPhone11 object it will be set correctly even when calling using the reference to the function obtained using destructuring
  console.log( `${brand} ${name} is available at a 10% discounted rate of $${calculateDiscoutedPrice( 10 )}` );
}

// bind the context ("this")
iPhone11.calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 );
printPhoneDetails( iPhone11 ); // Logs "Apple iPhone11 is available at a 10% discounted rate of $629.1"