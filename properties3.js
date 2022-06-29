const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
}; //prothom ta key, porer ta value r 2 ta mile ekta key value pair
// getting all properties names
const keys = Object.keys(bottle);
console.log(keys);
// get all values 
const values = Object.values(bottle);
console.log(values);
//getting all pairs
const pairs = Object.entries(bottle);
console.log(pairs); //ekta two dimensional array pabo er maddhome 
//object ke silgala kore dibo
Object.seal(bottle);
//ekhn r delete kaj hbe na
bottle.price = 100; //but value edit kora jabe

//delete korbo
delete bottle.isCleaned;
console.log(bottle); //object er property and property er value 2 takei delete kore ei delete objName.property; method