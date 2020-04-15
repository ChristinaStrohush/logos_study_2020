let sing = document.forms['signIn']
let tagDiv = document.createElement('div')
tagDiv.setAttribute('class', 'invalid-feedback')
let phoneMask = IMask(
    document.getElementById('phone'), {
      mask: '+{38}(000)-000-00-00'
    });
let reName = /^[A-Za-z]{1,20}$/
let reEmail = /^[\w-\.]+\@[a-zA-Z]+\.[a-zA-Z]+$/
let rePhone = /^\+38\(0([1-9]){2}\)-[0-9]{3}-[0-9]{2}-[0-9]{2}$/
let rePass = /^\w{8,15}$/

sing.button.addEventListener('click', function(){
    if(reName.test(sing.first.value)){
        sing.first.setAttribute('class', 'form-control is-valid')
        sing.first.parentElement.appendChild(tagDiv)
    } else{
        sing.first.setAttribute('class', 'form-control is-invalid')
        sing.first.parentElement.appendChild(tagDiv)
    }
    if(reName.test(sing.last.value)){
        sing.last.setAttribute('class', 'form-control is-valid')
        sing.last.parentElement.appendChild(tagDiv)
    } else{
        sing.last.setAttribute('class', 'form-control is-invalid')
        sing.last.parentElement.appendChild(tagDiv)
    }
    if(reEmail.test(sing.email.value)){
        sing.email.setAttribute('class', 'form-control is-valid')
        sing.email.parentElement.appendChild(tagDiv)
    } else{
        sing.email.setAttribute('class', 'form-control is-invalid')
        sing.email.parentElement.appendChild(tagDiv)
    }
    if(rePhone.test(sing.phone.value)){
        sing.phone.setAttribute('class', 'form-control is-valid')
        sing.phone.parentElement.appendChild(tagDiv)
    } else{
        sing.phone.setAttribute('class', 'form-control is-invalid')
        sing.phone.parentElement.appendChild(tagDiv)
    }
    if(rePass.test(sing.pass.value)){
        sing.pass.setAttribute('class', 'form-control is-valid')
        sing.pass.parentElement.appendChild(tagDiv)
    } else{
        sing.pass.setAttribute('class', 'form-control is-invalid')
        sing.pass.parentElement.appendChild(tagDiv)
    }
})