// task 1
class Worker{
    constructor(name, sname, rate, days){
        this.firstName = name;
        this.secondName = sname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate*this.days;
    }
}
const PETRIV = new Worker('Petro', 'Petriv', 300, 22);
console.log(PETRIV.firstName);
console.log(PETRIV.secondName);
console.log(PETRIV.rate);
console.log(PETRIV.days);
console.log(`Salary of ${PETRIV.firstName} ${PETRIV.secondName} is ${PETRIV.getSalary()}`);

const PAVLIV = new Worker('Pavlo', 'Pavliv', 500, 22);
console.log(`Salary of ${PAVLIV.firstName} ${PAVLIV.secondName} is ${PAVLIV.getSalary()}`);

//task 2
class MyString{
    reverse(str){
        let result = '';
        for(let i = str.length; i>=0; i--){
            result += str.charAt(i)
        }
        return result
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }
    ucWords(str){
        return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
    }
}

const str = new MyString()
console.log(str.reverse('IVAN'))
console.log(str.ucFirst('arsenal'))
console.log(str.ucWords('arsenal arsenal arsenal'))