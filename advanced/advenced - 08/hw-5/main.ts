let getButton = (x: string) => document.querySelector(x) as HTMLButtonElement;
let badWord: HTMLInputElement = document.querySelector('#badWord');
let words: HTMLElement = document.querySelector('.words');
let textArea: HTMLTextAreaElement = document.querySelector('textarea');
let arrWord: string[] = [];

getButton('#add').addEventListener('click', function(){
    if(badWord.value == ''){
        badWord.className = 'form-control is-invalid';
        badWord.placeholder = 'Please write a word!'
    } else{
        badWord.className = 'form-control';
        arrWord.push(`${badWord.value}`);
        badWord.placeholder = 'word here...'
    }
    words.innerText = ` ${arrWord.join(', ')}`;
    badWord.value = ''
    textArea.value = ''
})

getButton('#reset').addEventListener('click', function(){
    arrWord = [];
    words.innerText = ''
})

function changeWord(word: string): string{
    let stars: string = '*';
    return stars.repeat(word.length)
}

getButton('#cenzor').addEventListener('click', function(){
    if(textArea.value == ''){
        textArea.className = 'form-control is-invalid';
        textArea.placeholder = 'Please write a text!'
    } else{
        textArea.className = 'form-control';
        textArea.placeholder = 'word here...'
    }
    let reg = new RegExp(arrWord.join('|'), 'gi');
    textArea.value = textArea.value.replace(reg, changeWord)
})