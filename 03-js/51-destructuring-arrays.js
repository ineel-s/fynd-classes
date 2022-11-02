const weekdays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];

// const mon = weekdays[0], tue = weekdays[1], fri = weekdays[4];
const [ mon, tue, , , fri = 'Shukrvaar', sat = 'Shanivaar' ] = weekdays;
console.log( mon, tue, fri, sat );