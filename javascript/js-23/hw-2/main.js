$(function(){
    let ch = 46;
    let pr = 0
    setInterval(function(){
        $('.circle01').animate({
            transform: `rotate(${ch}deg)`
        }, 100, function(){
            if(ch<=225){
                $(this).css('transform', `rotate(${ch}deg)`)
                ch++
            } 
            else if(ch >= 225 && ch<=406){
                $('.circle02').css({
                    borderLeft: '7px solid white',
                    borderBottom: '7px solid white', 
                    transform: `rotate(${ch}deg)`
                })
                    if(ch>315) $('.circle02').css('border-right', '7px solid white')
                    ch++
            }
        })    
    },100)

    setInterval(function(){
        if(ch<=406 && pr<=100){
            $('.procent').text(`${pr}`);
            pr++
        }
    }, 364)   

})