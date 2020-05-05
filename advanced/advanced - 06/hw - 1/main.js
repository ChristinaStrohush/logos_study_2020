let getSel = x => document.querySelector(x),
    getAll = y => document.querySelectorAll(y);
let singUp = document.forms['singUp'],
    singIn = document.forms['singIn'];
let obj, users = [], data = [];

let reName = /^[A-Za-z]{1,20}$/,
    reEmail = /^[\w-\.]+\@[a-zA-Z]+\.[a-zA-Z]+$/,
    rePass = /^\w{3,8}$/;

class User{
    constructor(firstName, lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password
    }
}

singUp.button.addEventListener('click', function(){
    checkSingUp();
    createUser();
    resetForm('.singUp input', '.singUp .is-valid')
})

function checkSingUp(){
    valid(singUp.firstName, reName)
    valid(singUp.lastName, reName)
    valid(singUp.email, reEmail)
    valid(singUp.password, rePass)
    if(getAll('.singUp .is-valid').length > 3 && data.every((val) => val != undefined)){
        obj = new User(singUp.firstName.value, singUp.lastName.value, singUp.email.value, singUp.password.value)
    } else data = []
}

function valid(inp, reg){
    if(reg.test(inp.value)){
        data.push(inp.value)
        inp.setAttribute('class', 'form-control is-valid')
        if(getSel('.feedbackSingUp').children.length > 2) getSel('.feedbackSingUp span').remove()
    } else inp.setAttribute('class', 'form-control is-invalid')
}

function createUser(){
    if(localStorage.length > 0 && localStorage.getItem('users')) users = JSON.parse(localStorage.getItem('users'))
    if(users.some(users => users.email == singUp.email.value)){
        singUp.email.setAttribute('class', 'form-control is-invalid')
        createFeedback('this email already exist', getSel('.feedbackSingUp'))
        obj = undefined
    }
    if(obj != undefined) users.push(obj)
    if(users.length != 0) localStorage.setItem('users', JSON.stringify(users)) 
    obj = undefined
}

function createFeedback(mes, elem){
    elem.innerHTML += `<span class="invalid-feedback m-0 p-1 d-inline" style="color: white;">${mes}</span>`
}
function resetForm(x, y){
    if(getAll(x).length == getAll(y).length){
        singUp.reset();
        for(let i in getAll(x)){
            getAll(x)[i].className = 'form-control';
        }
    }
}

singIn.button.addEventListener('click', function(){
    getSel('.feedbackSingIn').innerHTML = ''
    if(localStorage.length > 0){
        if(singIn.email.value, singIn.password.value != ''){
            let fromStorage = localStorage.getItem('users')
            users = JSON.parse(fromStorage) 
            userCard()  
        } else createFeedback('write your info, please', getSel('.feedbackSingIn'))
    } else createFeedback('localstorage is empty', getSel('.feedbackSingIn'))
})

function userCard(){
    if(users.some(users => users.email == singIn.email.value && users.password == singIn.password.value)){
        let result = users.filter((val, ind, arr) => arr.some(arr => val.email == singIn.email.value && val.password == singIn.password.value))
        getSel('.feedbackSingIn').innerHTML = ''
        getSel('.name').innerText = `${result[0].firstName} ${result[0].lastName}`
        getSel('.email').innerText = `${result[0].email}`
        hideBox(getSel('#boxCard'), getSel('#singIn'))
        singIn.reset()
    } else createFeedback('wrong email or password', getSel('.feedbackSingIn'))
}

function hideBox(a, b){
    a.setAttribute('class', 'sing d-flex justify-content-center align-items-center');
    b.setAttribute('class', 'sing justify-content-center align-items-center hide');
}

singIn.link.addEventListener('click', function(){
    hideBox(getSel('#singUp'), getSel('#singIn'))
    if(getSel('.feedbackSingUp').children.length > 2) getSel('.feedbackSingUp span').remove()
    for(let i in getAll('.singUp input')){
        getAll('.singUp input')[i].className = 'form-control';
    }
    singUp.reset()
})
singUp.link.addEventListener('click', function(){
    hideBox(getSel('#singIn'), getSel('#singUp'))
    getSel('.feedbackSingIn').innerHTML = ''
    singIn.reset()
})
getSel('#cardButton').addEventListener('click', function(){
    hideBox(getSel('#singUp'), getSel('#boxCard'))
})
