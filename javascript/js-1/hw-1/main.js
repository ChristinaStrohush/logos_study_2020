// Завдання 1
let city; 
city = 'Київ';
city = 'Львів';
let adress = city;
alert(adress);

// Завдання 2
let n = prompt('Вкажіть будь-яке число, яке хочете порахувати в степені 3');
let result = n**3;
// let result = Math.pow(n,3); - можна задати через математичну функцію
console.log(result);

// Завдання 3
let pen = 4;
let penPrice = 5.25;
let pencil = 6;
let pencilPrice = 3.5;
let sumBuy = (pen*penPrice)+(pencil*pencilPrice);
document.write(sumBuy);