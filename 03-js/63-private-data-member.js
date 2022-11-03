function getShoppingCart() {
    // private variables / methods are declared here...
    const items = []; // private variable available only to the inner functions - add, show

    // private method
    const isString = ( value ) => typeof value === 'string';

    const shoppingCart = {
        add( item ) {
            if( isString( item ) ) {
                items.push( item )
            }
        },
        show() {
            console.log( items );
        }
    };

    return shoppingCart;
}

const shoppingCart = getShoppingCart();

shoppingCart.add( 'Lays Chips' );
shoppingCart.add( 'Britannia Marie' );
shoppingCart.add({
    name: 'Cashews'
});
// shoppingCart.items.push({ // error - shoppingCart.items does not even exist
//     name: 'Raisins'
// });

shoppingCart.show();