// 1. using object literal
const student = { name: 'Sakib AL Hasan', job: 'cricketer' };
// console.log(student);
// 2. constructor
const person = new Object();
// console.log(person);

// 3. 
// const human = Object.create(null);
// console.log(human);
const human = Object.create(student);
// console.log(human);
// console.log(human.job); //inheritance kore paise
//karon baper ache 

// 4. class
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);

// 5. function
function Manus(name) {
    this.name = name;
}
const man = new Manus('kader');
console.log(man);
//class er pet er vitore func diye kaj kore etake bole syntactical sugar bole