let getSel = x => document.querySelector(x)

// поточний час і година
function timeNow(){
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    if(day<10) day = '0' + day;
    if(month<10) month = '0' + month;
    if(hour<10) hour = '0' + hour;
    if(minute<10) minute = '0' + minute;
    if(second<10) second = '0' + second;
    getSel('.timeNow').innerText = `${hour}:${minute}:${second}`;
    getSel('.hourNow').innerText = `${day}.${month}.${year}`
}
setInterval(timeNow, 0)

// секундомір
let hour = 0;
let minute = 0;
let sec = 0;
function seconds(){
    if(sec<59){
        sec++
        if(sec<10) sec = '0' + sec;
    } else sec = 0
    if(sec == 0 && minute<=59){
        sec = '00'
        minute++
        if(minute<10) minute = '0' + minute;
    }
    if(minute>59){
        minute = 0
        hour++
        if(hour<10) hour = '0' + hour;
    }
    if(minute == 0) minute = '00'
    if(hour == 0) hour = '00'
    getSel('.sek').innerText = `${hour}:${minute}:${sec}`
}

let secondForm = document.forms['second']
let secondInterval
secondForm.start.addEventListener('click', function(){
    secondInterval = setInterval(seconds, 1000)
})

secondForm.stop.addEventListener('click', function(){
    clearInterval(secondInterval)
})

secondForm.loop.addEventListener('click', function(){
    getSel('.result').innerHTML += `<p>${getSel('.sek').innerText}</p>`
})

secondForm.reset.addEventListener('click', function(){
    clearInterval(secondInterval)
    hour = 0;
    minute = -1;
    sec = -1;
    seconds()
    getSel('.result').innerHTML = ''
})

// таймер
let checkForm = document.forms['check']
let countMinutes = parseInt(getSel('.countMinutes').innerText);
let sek = 0;
checkForm.plus.addEventListener('click', function(){
    if(countMinutes>=1 && countMinutes<59){
        countMinutes++;
        if(countMinutes<10) countMinutes = '0' + countMinutes
    } 
    getSel('.countMinutes').innerText = countMinutes
    getSel('.timerStart').innerText = `${countMinutes}:0${sek}`
})

checkForm.minus.addEventListener('click', function(){
    if(countMinutes>1 && countMinutes<=59){
        countMinutes--
        if(countMinutes<10) countMinutes = '0' + countMinutes
    } 
    getSel('.countMinutes').innerText = countMinutes
    getSel('.timerStart').innerText = `${countMinutes}:0${sek}`
})

let countSeconds = 60;
function timers(){
    if(countSeconds > 0){
        countSeconds--
        if(countSeconds<10) countSeconds = '0' + countSeconds
        if(countMinutes == getSel('.countMinutes').innerText){
            countMinutes -= 1
            if(countMinutes<10) countMinutes = '0' + countMinutes
        } 
    } else{
        countSeconds = 59
        if(countSeconds == 59 && countMinutes>0){
            countMinutes--
            if(countMinutes<10) countMinutes = '0' + countMinutes
        } else{
            countMinutes = getSel('.countMinutes').innerText
            countSeconds = '00'
            clearInterval(timerInterval)
        }
    }
    getSel('.timerStart').innerText = `${countMinutes}:${countSeconds}`
}

let timerForm = document.forms['timer']
let timerInterval;
timerForm.start.addEventListener('click', function(){
    timerInterval = setInterval(timers,1000)
})

timerForm.stop.addEventListener('click', function(){
    clearInterval(timerInterval)
})

timerForm.reset.addEventListener('click', function(){
    clearInterval(timerInterval)
    countMinutes = getSel('.countMinutes').innerText
    countSeconds = 0
    getSel('.timerStart').innerText = `${countMinutes}:0${sek}`
})