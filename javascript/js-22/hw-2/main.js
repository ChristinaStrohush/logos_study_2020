$(function(){
    setInterval(function(){
        let randSize = Math.floor(Math.random()*350);
        let randTop = Math.floor(Math.random()*($(window).height()-randSize));
        let randLeft = Math.floor(Math.random()*($(window).width()-randSize));
        let randColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        let randBorderColor = `rgb(${Math.floor((Math.random()*255)+1)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        $('.ball').animate({
            height: randSize,
            width: randSize,
            top: randTop,
            left: randLeft,
            backgroundColor: randColor,
            borderColor: randBorderColor
        }, 800, 'linear', function(){
            $(this).css('box-shadow', `5px 5px 30px ${randColor}`)
        })
    }, 800)
})