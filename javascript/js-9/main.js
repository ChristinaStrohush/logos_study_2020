// task 1
let ask01 = prompt('Текст з пробілами');
let ind01 = ask01.indexOf(' ')
if(ind01 < 0){
    console.log('пробілів немає')
} else {
    let suma = 1;
    for(let i = ind01+1; i <= (ask01.length - ind01)+1; i++){
        if(ask01.indexOf(' ', i) == i){
            suma += 1;
        }
    }
    console.log(suma)
}

// task 2
let ask02 = prompt('write your email');
if(ask02.includes('@') === false || ask02.startsWith('@') || ask02.endsWith('@')){
        console.log('Введіть коректно ваш мейл')
} else console.log('Hello')

// task 3
let ask03 = prompt('write some text with html');
let index = ask03.indexOf('html')
if(index < 0){
    console.log('html немає')
} else {
    let suma = 1;
    for(let i = index+1; i <= (ask03.length - index)+1; i++){
        if(ask03.indexOf('html', i) == i){
            suma += 1;
        }
    }
    console.log(suma)
}


// task 4
let ask04 = prompt('write URL');
if(ask04.startsWith('http:')){
    console.log(ask04.slice(11))
} else if (ask04.startsWith('https')){
    console.log(ask04.slice(12))
}