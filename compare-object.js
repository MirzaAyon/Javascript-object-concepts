// const first = { a: 1, };
// const second = { a: 1 };

// if (first == second) {
//     console.log('objects are equal');
// }
// else {
//     console.log('Objects are different');
// }
//eta third diye krbo  

//////////////
const first = { a: 1, b: 2 };
const second = { a: 1, b: 2 };
const third = first;

if (first === third) {
    console.log('objects are equal');
}
else {
    console.log('Objects are different');
} //dekhte same hole kono jae ashe na reference same hote hbe 



//stringify korle string hoye jabe, string ke reference diye check kore na eke value diye check kore

console.log(JSON.stringify(first));
console.log(JSON.stringify(second));
if (JSON.stringify(first) === JSON.stringify(second)) {
    console.log('objects are equal')
}