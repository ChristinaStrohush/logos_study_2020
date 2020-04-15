$(function(){
    $('.ball').click(function(){
        let randHeight = Math.floor(Math.random()*350);
        let randWidth = Math.floor(Math.random()*350);
        let randTop = Math.floor(Math.random()*($(window).height()-randHeight));
        let randLeft = Math.floor(Math.random()*($(window).width()-randWidth));
        let randColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
        $(this).animate({
            height: randHeight,
            width: randWidth,
            top: randTop,
            left: randLeft,
            backgroundColor: randColor
        }, 2000, 'swing')
    })
})