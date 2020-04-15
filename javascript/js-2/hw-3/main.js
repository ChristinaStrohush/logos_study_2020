let numberMonth = prompt('Введіть, будь ласка, число, яке відповідає місяцю року');
if(numberMonth >= 1 && numberMonth <= 2){
    let winter = alert('Це пора року Різдва, подарунків, сніжинок та глінтвейну - ЗИМА!')
} else if(numberMonth >= 3 && numberMonth <= 5){
    let spring = alert('Навіть соні стають активнішими та веселишими в цю пору року. Вона - ВЕСНА!')
} else if(numberMonth >= 6 && numberMonth <= 8){
    let summer = alert('ЛІТО = сонце. Класно, коли грієшся з близькими під ним у новому куточку світу')
} else if(numberMonth >= 9 && numberMonth <= 11){
    let autumn = alert('Золота весна - коли на вулиці Золота ОСІНЬ')
} else if(numberMonth == 12){
    let winter = alert('Це пора року Різдва, подарунків, сніжинок та глінтвейну - ЗИМА!')
} else{
    let time = alert('Чому Ви вводите невідповідне для місяців число?')
}