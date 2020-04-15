let getSel = x => document.querySelector(x)
let singup = document.forms['singup']
getSel('.profile').style.display = 'none'

singup.agree.addEventListener('click', function(){
    if(this.checked){
        singup.button.style.backgroundColor = 'mediumseagreen'
        singup.button.disabled = false
    } else{
        singup.button.style.backgroundColor = '#888'
        singup.button.disabled = true
    }
})

singup.button.addEventListener('click', function(){
    getSel('.box').style.display = 'none'
    getSel('.profile').style.display = 'flex'
    getSel('.name').innerText = singup.firstName.value + " " + singup.secondName.value
    getSel('.meil').innerText = singup.email.value
    getSel('.position').innerText = singup.position.value
    console.log(singup.sex.value)
    if(singup.sex.value == 'man'){
        getSel('.ava').style.backgroundImage = 'url(https://icons.iconarchive.com/icons/webalys/kameleon.pics/512/Man-16-icon.png)'
    } else if(singup.sex.value == 'woman'){
        getSel('.ava').style.backgroundImage = 'url(https://cdn.iconscout.com/icon/free/png-256/woman-1285-879839.png)'
        getSel('.ava').style.backgroundColor = 'hotpink'
    }
})

singout.button.addEventListener('click', function(){
    getSel('.profile').style.display = 'none'
    getSel('.box').style.display = 'block'
    singup.reset()
    singup.button.disabled = true
    singup.button.style.backgroundColor = '#888'
})