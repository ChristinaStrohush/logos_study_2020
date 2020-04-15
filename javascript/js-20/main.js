let reLogPass = /^\w+$/
let reEmail = /^[\w-\.]+\@[a-zA-Z]+\.[a-zA-Z]+$/
let addUserForm = document.forms['addUserForm']
let users = []
let renderBodyTag = document.querySelector('.renderBody') 

addUserForm.saveUser.addEventListener('click', function(){
    let login = addUserForm.loginInp.value
    let password = addUserForm.passwordInp.value
    let email = addUserForm.emailInp.value

    if(reLogPass.test(login) && reLogPass.test(password) && reEmail.test(email)){
        let newUser = new Profile(login,password,email)
        users.push(newUser)
        addUserForm.reset()
        renderBody()
    }
})

function Profile (login, password,email) {
    this.login = login;
    this.password = password;
    this.email = email
}

function renderBody() {
    renderBodyTag.innerHTML = ''
    for(let i = 0; i<users.length; i++){
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML = i+1
        tr.appendChild(td)
        for(let key in users[i]){
            let td = document.createElement('td')
            td.innerHTML = users[i][key]
            tr.appendChild(td)
        }
        tr.innerHTML += `<td><button onclick="editValue(${i})" class="btn btn-warning">Edit</button></td>`
        tr.innerHTML += `<td><button onclick="deleteValue(${i})" class="btn btn-danger">Delete</button></td>`
        renderBodyTag.appendChild(tr)
    }    
}

function editValue(ind) {
    addUserForm.loginInp.value = users[ind].login
    addUserForm.passwordInp.value = users[ind].password
    addUserForm.emailInp.value = users[ind].email

    addUserForm.saveUser.style.display = 'none'
    addUserForm.changeUser.style.display = 'block'
    addUserForm.changeUser.onclick = function(){
        changeUser(ind)
    }
}

function changeUser(ind) {
    users[ind].login = addUserForm.loginInp.value
    users[ind].password = addUserForm.passwordInp.value
    users[ind].email = addUserForm.emailInp.value

    addUserForm.changeUser.style.display = 'none'
    addUserForm.saveUser.style.display = 'block'
    renderBody()
    addUserForm.reset()
}

function deleteValue(ind){
    users.splice(ind,1)
    renderBody()
}