let login = prompt("Введіть, будь ласка, Ваше ім'я");
let singPassword = 'logos';

if(login){
    let password = prompt('Введіть, будь ласка, Ваш пароль')
    if(password == singPassword){
        console.log('Ласкаво просимо!')
    } else if(password == null){
        console.log('Вхід скасований')
    } else{
        console.log('Пароль - невірний')
    }
} else if(login == null){
    console.log('Вхід скасований')
} else{
    console.log('Я Вас не знаю')
}