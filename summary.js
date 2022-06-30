const pen = {
    brand: 'econo',
    price: 10,
    writePoem: function (food) {
        console.log(food);
    } //ei func er vitore console.log and return both korte pari
    //ei func ke bole obj er method
    //pm dileo hbe na dileo hbe 
}
//keys
const keys = Object.keys(pen);
//values
const values = Object.values(pen);
//object er khetre loop for in
for (const key in pen) {
    console.log(pen[key]);

    // console.log(pen);
}

const a = { a: 1 };
const b = { a: 1 };
const c = a;

if (a === b) {
    //same hbe 
}
const a = { a: 1 };
const b = { a: 1 };


if (a === b) {
    //same hbe na
}
// optional
const aBounded = pen.writePoem.bind(a);
//pen er modhe write poem ke call kore bind korbo erpr this er value ki hbe she object take pathae dibo
aBounded(); //bind korle she new ekta func dibe and shei func ke ami bar bar call krbo
//direct action holo call,apply

// this
//this er value bivinno place e bivinno rkm hoy
//arrow func er nijer kono this hoyna she tar outside er this take ney
//arrow func and normal func er modhe diffference ki? (interview)
// ans: arrow func er nijer kono this hoy na, take ami bind kore onno vabe set kore dite hoy
//this er onk kahini ache