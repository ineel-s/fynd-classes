// spread -> ... -> main use is to clone (copy) / merge an array / object

// Scenario #1: Apply it on an array
const nums1 = [ 1, 2, 3 ], nums2 = [ 4, 5, 6 ];

// we create a new array with a copy of the numbers (the nums1 items are numbers, i.e. primitives)
const nums1Copy = [ ...nums1 ] // const nums1Copy = [ nums1[0], nums1[1], nums1[2] ]
const nums1AnotherCopy = nums1; // no new array is created -> nums1AnotherCopy and nums1 both refer to the SAME array in memory

nums1Copy[0]++;

console.log( nums1 ); // [ 1, 2, 3 ]
console.log( nums1Copy ); // [ 2, 2, 3 ]

// EXERCISE: Concatenate nums1 and nums2 to create a new array -> [ 1, 2, 3, 4, 5, 6 ]
const nums3 = [ ...nums1, ...nums2 ];
console.log( nums3 );

// Scenario #2: Apply it on an object