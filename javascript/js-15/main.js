let addTaskForm = document.forms['add'];
let moveTaskForm = document.forms['moveTask'];
let block = document.querySelectorAll('.block');
let lengthBlock = block.length;

for(let i = 0; i<lengthBlock; i++){
    moveTaskForm.elements[i].setAttribute('onclick', `deleteValue(${i})`);
}

addTaskForm.button.addEventListener('click', function(){
    let tagInput = document.createElement('input');
    if(addTaskForm.text.value != ''){
        let tagDiv = document.createElement('div');
        tagDiv.setAttribute('class', 'block');
        tagInput.type = 'checkbox';
        let tagSpan = document.createElement('span');
        tagSpan.innerText = addTaskForm.text.value;
        tagDiv.appendChild(tagInput);
        tagDiv.appendChild(tagSpan);
        document.getElementById('moveTask').appendChild(tagDiv);
        lengthBlock++
    } else alert('не можливо додати пусте поле');
    addTaskForm.reset();
    for(let i = 0 ; i<moveTaskForm.length; i++){
        moveTaskForm.elements[i].setAttribute('onclick', `deleteValue(${i})`)
    }
})

function deleteValue(ind){
    if(lengthBlock>1){
        moveTaskForm.elements[ind].parentElement.setAttribute('class', 'hide');
        lengthBlock--
    } else{
        alert('не можливо видалити останнє завдання');
        moveTaskForm.elements[ind].checked = false
    } 
}