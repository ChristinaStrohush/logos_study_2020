let move = document.forms['move'];

move.button.addEventListener('click', function(){
    if(move.tl.value != ''){
        move.tr.value = move.tl.value
        move.tl.value = ''
    }
})

let placeH = document.forms['placeholder'];

placeH.addEventListener('change', function(){
    if(placeH.tt.value != ''){
        placeH.tt.placeholder = placeH.tt.value
        placeH.reset()
    }
})