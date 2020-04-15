let task01 = prompt('Скільки буде "1+1"?');
let task02 = confirm('Чи погоджуєтесь з твердженням: "30 лютого завжди падає сніг?"');
let task03 = prompt('Скільки секунд має хвилина?');
let task04 = prompt('Як звати теперішнього Папу Римського?');
let task05 = confirm('Червень - останній місяць другого кварталу?');
let task06 = prompt('Хто тренер футбольної команди Ліверпуль?');
let task07 = confirm('Чи правильне твердження: "Планета Земля обертається навколо своєї осі?"');
let task08 = prompt('Як називається пора року, під час якої в Україні найтепліше?');
let task09 = prompt('В скільки років в Україні видають внутрішній паспорт?');
let task10 = confirm('Колядка - це пісня?')

let answer01 = 2;
let answer02 = false;
let answer03 = 60;
let answer04 = 'Франциск';
let answer05 = true;
let answer06 = 'Клоп';
let answer07 = true;
let answer08 = 'літо';
let answer09 = 16;
let answer10 = true;

let result01;
let result02;
let result03;
let result04;
let result05;
let result06;
let result07;
let result08;
let result09;
let result10;

if(task01 == answer01){
    result01 = 1
    console.log(result01)
} else{
    result01 = 0
    console.log(result01)
}
if(task02 == answer02){
    result02 = 1
    console.log(result02)
} else{
    result02 = 0
    console.log(result02)
}
if(task03 == answer03){
    result03 = 1
    console.log(result03)
} else{
    result03 = 0
    console.log(result03)
}
if(task04 == answer04){
    result04 = 1
    console.log(result04)
} else{
    result04 = 0
    console.log(result04)
}
if(task05 == answer05){
    result05 = 1
    console.log(result05)
} else{
    result05 = 0
    console.log(result05)
}
if(task06 == answer06){
    result06 = 1
    console.log(result06)
} else{
    result06 = 0
    console.log(result06)
}
if(task07 == answer07){
    result07 = 1
    console.log(result07)
} else{
    result07 = 0
    console.log(result07)
}
if(task08 == answer08){
    result08 = 1
    console.log(result08)
} else{
    result08 = 0
    console.log(result08)
}
if(task09 == answer09){
    result09 = 1
    console.log(result09)
} else{
    result09 = 0
    console.log(result09)
}
if(task10 == answer10){
    result10 = 1
    console.log(result10)
} else{
    result10 = 0
    console.log(result10)
}
let total = result01 + result02 + result03 + result04 + result05 + result06 + result07 + result08 + result09 + result10;

if(total > 9){
    document.write(`<div style="width: 300px; height: 200px; background-color: lightgreen; margin: 0 auto; font-size: 16px; text-align: center; color: #333; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <p><b>Ви набрали найвищий бал - ${total}!</b></p>
    <p>Ви - великий молодець!</p>
    <p>Продовжуйте в цьому дусі!</p></div>`)
} else if(total <= 9 && total >= 6){
    document.write(`<div style="width: 300px; height: 200px; background-color: lightskyblue; margin: 0 auto; font-size: 16px; text-align: center; color: #333; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <p><b>Ви набрали - ${total} балів!</b></p>
    <p>А це - більше половини запитань. Гарний результат!</p>
    <p>Потрібно ще трошки попрацювати і Ви досягнете найвищого балу</p></div>`)
} else if(total == 0){
    document.write(`<div style="width: 300px; height: 200px; background-color: lightcoral; margin: 0 auto; font-size: 16px; text-align: center; color: #333; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <p><b>Дуже шкода, Ви набрали - ${total} балів!</b></p>
    <p>Спробуйте бути уважнішим і у Вас все вдасться!</p></div>`)
} else{
    document.write(`<div style="width: 300px; height: 200px; background-color: lightyellow; margin: 0 auto; font-size: 16px; text-align: center; color: #333; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <p><b>Ваш результат - ${total} бали!</b></p>
    <p>Не засмучуйтесь!</p>
    <p>Наступного разу вдасться краще!</p></div>`)
}