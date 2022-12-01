function greet() {
    var hour = (new Date()).getHours();

    if( 5 < hour && hour < 12 ) {
        console.log( 'good mroning' );
    }  else if( 12 <= hour && hour < 16 ) {
        console.log( 'good afternoon' );
    } else if( 16 <= hour && hour < 20  ) {
        console.log( 'Good evening' );
    } else {
        console.log( 'good night' );
    }
}

greet();