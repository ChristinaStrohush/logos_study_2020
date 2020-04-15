// let password = prompt('введіть, будь ласка, пароль');
// while(password != 'password'){
//     let i = 4;
//     while(password != 'password'){
//         if(i > 0){
//         password = prompt(`введіть, будь ласка, пароль ще раз. У вас залишилось спроб - ${i}`);
//         i--
//         } else if(i == 0){
//             let sorryBye = alert('Спробуйте пізніше');
//             password = 'password';
//         }
//     }
//     i--
// }
// let hello = alert('Запрошуємо на сайт!');

let i = 4;
let password = prompt('введіть, будь ласка, пароль');
while(i > 0) {
    if (password != 'password') {
        password = prompt(`введіть, будь ласка, пароль ще раз. У вас залишилось спроб - ${i}`);
        i--;
    } else {
        let hello = alert('Запрошуємо на сайт!');
        i=0;
    }
}
if (password != 'password') {
    let sorryBye = alert('Спробуйте пізніше');
}