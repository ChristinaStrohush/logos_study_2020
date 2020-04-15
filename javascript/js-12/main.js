let getSel = x => document.querySelector(x);

// task 1
let arr = ['red', 'yellow', 'green'];
let i = 0;
getSel('.block').onmouseover = function(event){
    this.style.backgroundColor = `${arr[i]}`
    if(i<2) i++
    else i=0
}

getSel('.block').onmouseout = function(event){
    this.style.backgroundColor = ''
}

// task 2
function overM(){
    getSel('.text').innerHTML = 'Хочеш знати який?';
    getSel('.text').style.color = 'blue';
    this.style.backgroundColor = 'yellow';
}

getSel('.colorBlock').onmouseover = overM;

getSel('.colorBlock').onmouseout = function(){
    getSel('.text').innerHTML = 'У мене є секрет!';
    getSel('.text').style.color = 'blue';
    this.style.backgroundColor = '';
}

getSel('.colorBlock').onmousedown = function(){
    getSel('.text').innerHTML = 'А я тобі не скажу!';
    getSel('.text').style.color = 'white';
    this.style.backgroundColor = 'black';
}

getSel('.colorBlock').onmouseup = overM;


// task 3
for(let j = 0; j<=2; j++){
    getSel('.box').children[j].onclick = function(){
        let a = prompt('Вставте адресу зображення для цього блоку');
        let b = `url(${a})`;
        this.style.backgroundImage = b;
    }
}

// task 4
for(let i = 0; i<=5; i++){
    getSel('#ol').children[i].onclick = function(){
        this.style.color = ol.children[i].innerHTML
    }
}