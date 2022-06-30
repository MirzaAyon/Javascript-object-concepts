const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
        //this money means ei money
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
kibria.treatDey(100);
const heroTreatDey = kibria.treatDey.bind(heroBalam);
//evabe bind kore ekta func banano lagse erpr shetake call kora lagse
heroTreatDey(500);
heroTreatDey(300);
heroTreatDey(500);
kibria.treatDey(400);
const normalTreatDey = kibria.treatDey.bind(normalGolam);
normalTreatDey(2000);
//kono ekta object e kono method thakle ta amra onno object er jnno use korte pari
//bind mane bedhe fele ekta func ke arekta func er modhe bedhe fele