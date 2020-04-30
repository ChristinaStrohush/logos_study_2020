// Task 1
let city;
city = 'Kyiv';
city = 'Lviv';
let address = city;
console.log(address);
// Task 2
let num = +prompt('write a number');
let checkNum = num > 0
    ? num % 2 == 0 ? console.log('Число парне') : console.log('Число непарне')
    : console.log('число 0');
// Task 3
function f1(a, b, ...arg) {
    console.log(Math.max(a, b, ...arg));
    return Math.max(a, b, ...arg);
}
f1(5, -2);
f1(5, -2, 6, 7, 8, -1, 15, -6);
// Task 4
let num2 = +prompt('Вкажіть число для обрахунку квадратного кореня');
function getSqrt(number) {
    while (number != number * 1 || number <= 0) {
        if (number < 0)
            number = +prompt('Введдіть додатнє число');
        else if (number == '')
            number = +prompt('Будь ласка, введіть число!');
        else
            number = +prompt('Повинно бути числове значення');
    }
    alert(`Квадратний корінь з числа ${number} = ${Math.sqrt(number)}`);
}
getSqrt(num2);
