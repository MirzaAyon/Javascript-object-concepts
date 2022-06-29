const student = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    //object er vitore property as a function
    //func er naam dileo hbe na dileo hbe 
    //object er vitore kono property ke access korte chaile this likhbo erpr property er naam likhbo  
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDey: function (expense, boksis) {
        this.money = this.money - expense - boksis;
        return this.money;
    }
    //evabe object er vitore function likhte hoy
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);