// task 1
function getDigits(number){
    let fixedDrib = number.toString().split('.')[1].length;
    let drib = number - Math.floor(number);
    console.log(drib.toFixed(fixedDrib))
}
getDigits(1.25);
getDigits(7.313);
getDigits(100.3);

//task 2
function getArea (number){
    if(number >= 1){
        console.log(Math.PI*(Math.pow(number, 2)))
    } else if(number != number*1){
        console.log('Повинно бути числове значення')
    } else if(number == 0){
        console.log('Будь ласка, введіть радіус!')
    }
}
let ask = prompt('Введіть, будь ласка, радіус круга, щоб порахувати його площу');
getArea(ask)

// task 3
function getSqrt(number){
    if(number >= 1){
        console.log(Math.sqrt(number))
    } else if(number < 0){
        console.log('Введіть додатнє число')
    } else if(number != number*1){
        console.log('Повинно бути числове значення')
    } else if(number == 0){
        console.log('Будь ласка, введіть число')
    }
}
let num = prompt('Введіть, будь ласка, число, щоб порахувати квадратний корінь');
getSqrt(num)
