const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === third) {
    console.log('objects are equal');
}
else {
    console.log('Objects are different');
}