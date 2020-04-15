// Task 1
let person = {}
person.firstName = 'Ivan';
person.secondName = 'Ivaniv';
function showData(){
    console.log(`${this.firstName} ${this.secondName}`)
}
person.showData = showData;
let newPerson = {}
for(let key in person){
    newPerson[key] = person[key]
}
newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';

person.showData();
newPerson.showData();

// Task 2
let myMath = {}
myMath.a = 5;
myMath.b = 2;
myMath.sum = sum;
myMath.multiplication = multiplication;
myMath.division = division;
myMath.suntraction = suntraction;
function sum(){
    console.log(`${myMath.a} + ${myMath.b} = ${myMath.a+myMath.b}`);
}
myMath.sum()
function multiplication(){
    console.log(`${myMath.a} * ${myMath.b} = ${myMath.a*myMath.b}`);
}
myMath.multiplication()
function division(){
    console.log(`${myMath.a} / ${myMath.b} = ${myMath.a/myMath.b}`);
}
myMath.division()

function suntraction(){
    console.log(`${myMath.a} - ${myMath.b} = ${myMath.a-myMath.b}`);
}
myMath.suntraction()