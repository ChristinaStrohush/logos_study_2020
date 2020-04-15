let backBody = prompt('фон сторінки');
let styleText = prompt('тип шрифта на сторінці');
let alingH1 = prompt('вирівнювання для головного заголовку');
let backLink = prompt('фон параграфа з лінками');
let colorParagrafLink = prompt('колір тексту параграфа з лінками');

document.body.style.background = backBody;
document.body.style.fontFamily = styleText;

let tagH1 = document.createElement('h1');
document.querySelector('body').appendChild(tagH1);
document.querySelector('h1').innerHTML = 'My page';
document.querySelector('h1').style.textAlign = alingH1;

let tagP = document.createElement('p');
document.querySelector('body').appendChild(tagP);
document.querySelector('p').innerHTML = 'Мої улюблені сайти: ';
document.querySelector('p').style.backgroundColor = backLink;
document.querySelector('p').style.color = colorParagrafLink;

let a = '';
for(let i = 0; i<3; i++){
    let href = prompt('адреса сайту');
    let colorLink = prompt('колір лінку');
    let newA = `<a href='${href}' style='color: ${colorLink}'>${href}</a> `
    a += newA;
}
document.querySelector('p').innerHTML += a;

let colorDiv = prompt('колір тексту дів');
let sizeTextDiv = +prompt('розмір шрифта в дів');
let wigthTextDiv = +prompt('товщина шрифта в дів');
let markerList = prompt('тип маркеру для списку');

let tagDiv = document.createElement('div');
document.querySelector('body').appendChild(tagDiv);
document.querySelector('div').style.color = colorDiv;
document.querySelector('div').style.fontSize = `${sizeTextDiv}px`;
document.querySelector('div').style.fontWeight = wigthTextDiv;

let tagUl = document.createElement('ul');
document.querySelector('div').appendChild(tagUl);

let li01 = document.createElement('li');
document.querySelector('ul').appendChild(li01).innerHTML = 'item01';

let li02 = document.createElement('li');
document.querySelector('ul').appendChild(li02).innerHTML = 'item02';

document.querySelectorAll('li').style.listStyleType = markerList;