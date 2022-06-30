const first2 = { a: 1, b: 2 };
const second2 = { b: 2, a: 1 };
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if (JSON.stringify(first2) === JSON.stringify(second2)) {
    console.log('objects are equal')
}
else {
    console.log('not equal');
}