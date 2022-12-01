for( let line_no = 1; line_no <= 5; line_no++ ) {
    let str = '';
    
    for( let num = 1; num <= line_no; num++ ) {
        str += ( num + ' ' );
    }
    
    console.log( str );
}