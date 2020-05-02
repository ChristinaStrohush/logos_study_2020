let reLogPass = /^\w+$/;
let reEmail = /^[\w-\.]+\@[a-zA-Z]+\.[a-zA-Z]+$/;
let addUserForm: HTMLFormElement = document.forms['addUserForm'];
let users: Profile[] = [];
let renderBodyTag: HTMLTableElement = document.querySelector('.renderBody');

addUserForm.saveUser.addEventListener('click', function(): void{
    let login = addUserForm.loginInp.value;
    let password = addUserForm.passwordInp.value;
    let email = addUserForm.emailInp.value;

    if(reLogPass.test(login) && reLogPass.test(password) && reEmail.test(email)){
        let newUser = new Profile(login,password,email);
        users.push(newUser);
        addUserForm.reset();
        renderBody();
    }
})
class Profile{
    constructor(
        public login: string,
        public password: string,
        public email: string
    ){}
}

function renderBody(): void{
    renderBodyTag.innerHTML = '';
    users.map((val, i, arr): void => {
        let tr: HTMLElement = document.createElement('tr');
        let td: HTMLElement = document.createElement('td');
        td.innerHTML = `${+i+1}`;
        tr.appendChild(td);
        for(let key in users[i]){
            let td: HTMLElement = document.createElement('td');
            td.innerHTML = users[i][key];
            tr.appendChild(td);
        }
        tr.innerHTML += `<td><button onclick="editValue(${i})" class="btn btn-warning">Edit</button></td>`;
        tr.innerHTML += `<td><button onclick="deleteValue(${i})" class="btn btn-danger">Delete</button></td>`;
        renderBodyTag.appendChild(tr);
    })  
}

function editValue(ind: number): void{
    addUserForm.loginInp.value = users[ind].login;
    addUserForm.passwordInp.value = users[ind].password;
    addUserForm.emailInp.value = users[ind].email;

    addUserForm.saveUser.style.display = 'none';
    addUserForm.changeUser.style.display = 'block';
    addUserForm.changeUser.onclick = function(): void{
        changeUser(ind);
    }
}

function changeUser(ind: number): void{
    users[ind].login = addUserForm.loginInp.value;
    users[ind].password = addUserForm.passwordInp.value;
    users[ind].email = addUserForm.emailInp.value;

    addUserForm.changeUser.style.display = 'none';
    addUserForm.saveUser.style.display = 'block';
    renderBody();
    addUserForm.reset();
}

function deleteValue(ind: number): void{
    users.splice(ind,1);
    renderBody();
}