/**
 * "Functions are objects in JavaScript"
 */
function foo() {
    console.log( 'i am foo' );
}

foo.age = 32;

foo.celebrateBirthday = function() {
    this.age++;
}

foo.age++; // 33
foo.celebrateBirthday(); // 34
foo.spouse = {
    doo: function() {
        console.log( 'i am doo' );
    }
}

console.log( foo.age );

foo.spouse.doo();