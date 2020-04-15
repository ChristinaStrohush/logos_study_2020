let getSel = x => document.querySelector(x)

window.addEventListener('keydown', function(event){
    if(event.keyCode == 9){
        event.preventDefault();
        getSel('.text').value += '\t'
    }
    if(event.keyCode != 16){
        getSel(`.c${event.keyCode}`).style.backgroundColor = '#888';
        getSel(`.c${event.keyCode}`).style.color = '#fff'
    } else{
        getSel(`.loc${event.location}`).style.backgroundColor = '#888';
        getSel(`.loc${event.location}`).style.color = '#fff'
    }
})

window.addEventListener('keyup', function(event){
    if(event.keyCode != 16){
        getSel(`.c${event.keyCode}`).style.backgroundColor = '';
        getSel(`.c${event.keyCode}`).style.color = ''
    } else{
        getSel(`.loc${event.location}`).style.backgroundColor = '';
        getSel(`.loc${event.location}`).style.color = ''
    }
})