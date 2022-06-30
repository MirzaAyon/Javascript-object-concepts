const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log('here5555', this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
}
//call
kibria.treatDey.call(heroBalam, 500, 100, 50);
kibria.treatDey.call(heroBalam, 300, 50, 30);
//method kibria er modhe but call kore use kora hoise hero balam er modhe
// onno ekta object er method ke call korar jnno this value dibo r sathe ektar por ekta pm comma diye diye dibo


kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [1000, 200, 100]);

kibria.treatDey.apply(normalGolam, [700, 100, 70])
//same as call just argument gulake array er modhe diye dite hbe 
//kibria treatde normal golam er upr apply
//call,bind,apply er kaj onner gudam e kono jinish ache/method ache shetake niye eshe onno object er jnno apply kora ermodhe bind hoche oi func take bind kore new ekta func create kore then shetake call kore kore use korte hoy , call hochee eke shorashori call korbo and call korte gele oi je func take ami call korbo tokhn je func ke call korbo take to first pm hishebe dibo and baki pm gulake comma diye diye pore add kore dibo
//apply er khetre jei func ke call krbo take to first pm hishebe diboi r porer gulake comma diye diye add kore dbo
//bind diye korle 2 vage korte hbe r call,apply diye kore ek tana kore dite parbo
//chaile shob gula ek sathe use korte pari
//spread operator ashar por egular use kome gese