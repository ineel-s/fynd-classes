let next = 1;

for( let line_no = 1; line_no <= 5; line_no++ ) {
    let str = '';

    for( let num = 1; num <= line_no; num++, next++ ) {
        str += ( next + ' ' );
    }
    
    console.log( str );
}