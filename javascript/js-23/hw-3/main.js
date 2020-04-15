$(function(){
    let img = ['image/image_part_001.jpg', 'image/image_part_002.jpg', 'image/image_part_003.jpg', 'image/image_part_004.jpg', 'image/image_part_005.jpg', 'image/image_part_006.jpg', 'image/image_part_007.jpg', 'image/image_part_008.jpg', 'image/image_part_009.jpg']
    let randImg = []
    function randomImage(){
        let imgLen = img.length
        while(randImg.length != imgLen){
            randImg.push(img.splice(Math.floor(Math.random() * img.length), 1))
        }
    }
    randomImage()
    $('.part').draggable({
        containment: '#imageBox'
    })
    
    $('#imageBox').sortable({
        // connectWith: '#imageBox',
        // distance: 50
    })
    for(let i = 0; i<9; i++){
        $('.part').eq(i).css('background-image', `url(${randImg[i].join()})`)
    }
    console.log($('.part').length)


})