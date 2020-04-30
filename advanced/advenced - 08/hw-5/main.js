let getButton = (x) => document.querySelector(x);
let badWord = document.querySelector('#badWord');
let words = document.querySelector('.words');
let textArea = document.querySelector('textarea');
let arrWord = [];
getButton('#add').addEventListener('click', function () {
    if (badWord.value == '') {
        badWord.className = 'form-control is-invalid';
        badWord.placeholder = 'Please write a word!';
    }
    else {
        badWord.className = 'form-control';
        arrWord.push(`${badWord.value}`);
        badWord.placeholder = 'word here...';
    }
    words.innerText = ` ${arrWord.join(', ')}`;
    badWord.value = '';
    textArea.value = '';
});
getButton('#reset').addEventListener('click', function () {
    arrWord = [];
    words.innerText = '';
});
function changeWord(word) {
    let stars = '*';
    return stars.repeat(word.length);
}
getButton('#cenzor').addEventListener('click', function () {
    if (textArea.value == '') {
        textArea.className = 'form-control is-invalid';
        textArea.placeholder = 'Please write a text!';
    }
    else {
        textArea.className = 'form-control';
        textArea.placeholder = 'word here...';
    }
    let reg = new RegExp(arrWord.join('|'), 'gi');
    textArea.value = textArea.value.replace(reg, changeWord);
});
