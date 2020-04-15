// Завдання 1. Switch
let month = +prompt('Введіть число місяця року');
switch(true){
    case month>0 && month<=2 :
    case month == 12 :
        alert('це зима')
        break
    case month>=3 && month<=5 :
        alert('це весна')
        break
    case month>=6 && month<=8 :
        alert('це літо')
        break
    case month>=9 && month<=11 :
        alert('це осінь')
        break
    default :
        alert('таке число не властиве для місяця року')
}


// Завдання 2. Function declaration
function simple(a){
    for(let i = 2; i<a; i++){
        if(a%i === 0){
            return false
        }
    }
    return a > 1
}
let ask = +prompt('Введіть число, щоб перевірити, чи воно - просте?')
console.log(`Чи число ${ask} просте? - ${simple(ask)}`)


// Завдання 3
function max(a,b, ...arg){
    console.log(Math.max(a,b, ...arg))
}
max(5, -2);
max(5, -2, 30, 6)