const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

/*
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/
//for in ke array er upr use korena karon order take same rakhte parbe emn kon grrantee nai

for (const prop in bottle) {
    console.log(prop);
    console.log(bottle[prop]);
    console.log(prop, bottle[prop]);
}


const keys = Object.keys(bottle);
console.log(keys);
for (const prop of keys) {
    console.log(prop, bottle[prop]);
}


//another method
// advanced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow']; //eta destructuring way
//entries theke  array ber hoise tai eke for of kora hoise karon for in sudhu property take dibe 2 ta value dibe na 
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}
//js e array o ekdhoron er obj