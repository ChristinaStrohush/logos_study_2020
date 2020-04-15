$(function(){
    setTimeout(function(){
        $('.minCount').text('2');
        $('.backBlack').slideDown(1000*120)
    })
    setTimeout(function(){
        $('.minCount').text('1');
        $('.backBlack').slideUp(1000*60, function(){
            $('.minCount').text('0');
        })
    },1000*120)
})