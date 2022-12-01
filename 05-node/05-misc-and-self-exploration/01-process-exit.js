console.log( 1 );

// stop the executing process right now...
// 0 -> normal, i.e. successful exit
process.exit( 0 );

// unsuccessful exit. The exit code is +ve number. The number is decided by whoever writes the script.
// process.exit( 1 );

// does not print
console.log( 2 );