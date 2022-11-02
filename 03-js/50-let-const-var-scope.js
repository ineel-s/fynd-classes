for( let i = 0; i < 3; i++ ) { // i is local to the for block
    ;
}

// console.log( i );

// var variables DO NOT have block scope
// the "i" variable is global (in this case)
// for( var i = 0; i < 3; i++ ) { // is is NOT limited to the for block
//     ;
// }

// console.log( i );