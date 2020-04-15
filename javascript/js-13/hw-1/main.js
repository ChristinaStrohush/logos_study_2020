let getSel = x => document.querySelector(x)

getSel('#colors').addEventListener('click', function(){
    for(let i = 0; i<getSel('.box').children.length; i++){
            getSel('.box').children[i].setAttribute('class', 'boxSmall');
            getSel('.box02').children[i].removeAttribute('class');
            getSel('.box').children[i].onclick = function(){
                document.body.style.background = getComputedStyle(this).background;
            }
    }
})

getSel('#images').addEventListener('click', function(){
    for(let j = 0; j<getSel('.box02').children.length; j++){
        getSel('.box02').children[j].setAttribute('class', 'box02Small');
        getSel('.box').children[j].removeAttribute('class');
        getSel('.box02').children[j].onclick = function(){
            document.body.style.backgroundImage = getComputedStyle(this).backgroundImage
            document.body.style.backgroundSize = getComputedStyle(this).backgroundSize
        }
    }
})