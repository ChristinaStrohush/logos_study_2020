let getSel = x => document.querySelector(x)
let edit = document.forms['editClick'];
let mainButton = document.forms['mainButton'];

edit.loremEdit.value = getSel('.lorem').innerHTML

mainButton.edit.addEventListener('click', function(){
    getSel('.style').setAttribute('class', 'style hide')
    getSel('.edit').setAttribute('class', 'edit')
})

edit.save.addEventListener('click', function(){
    getSel('.lorem').innerHTML = edit.loremEdit.value
    getSel('.edit').setAttribute('class', 'edit hide')
})

let elements = document.forms['elements']
edit.add.addEventListener('click', function(){
    getSel('.lorem').setAttribute('class', 'lorem block hide')
    getSel('.styles').setAttribute('class', 'styles block hide')
    getSel('.mainButton').setAttribute('class', 'mainButton hide')
    getSel('.elements').setAttribute('class', 'elements block')
    getSel('.table').setAttribute('class', 'table hide')
    getSel('.list').setAttribute('class', 'list hide')
})

mainButton.style.addEventListener('click', function(){
    getSel('.edit').setAttribute('class', 'edit hide')
    getSel('.style').setAttribute('class', 'style')
})

let size = document.forms['size']
for(let i = 0; i<size.elements.length; i++){
    size.elements[i].addEventListener('click', function(){
    getSel('.lorem').style.fontSize = this.value
})
}

let family = document.forms['family']
family.fontFamily.addEventListener('change', function(){
    for(let j = 0; j<getSel('.lorem').children.length; j++){
        getSel('.lorem').children[j].style.fontFamily = `${this.value}`
    }
})

let colors = document.forms['colors']
colors.color.addEventListener('click', function(){
    getSel('.styleBox02').setAttribute('class', 'styleBox02 hide')
    getSel('.styleBox').setAttribute('class', 'styleBox')
    for(let i = 0; i<getSel('.styleBox').children.length; i++){
        let smallCol = getComputedStyle(getSel('.styleBox').children[i]).color
        getSel('.styleBox').children[i].addEventListener('click', function(){
            getSel('.lorem').style.color = `${smallCol}`
            getSel('.styleBox').setAttribute('class', 'styleBox hide')
        })
    }
})

colors.back.addEventListener('click', function(){
    getSel('.styleBox').setAttribute('class', 'styleBox hide')
    getSel('.styleBox02').setAttribute('class', 'styleBox02')
    for(let i = 0; i<getSel('.styleBox02').children.length; i++){
        let smallBack = getComputedStyle(getSel('.styleBox').children[i]).backgroundColor
        getSel('.styleBox02').children[i].addEventListener('click', function(){
            getSel('.lorem').style.backgroundColor = `${smallBack}`
            getSel('.styleBox02').setAttribute('class', 'styleBox02 hide')
        })
    }
})

let weight = document.forms['weight']
weight.bold.addEventListener('click', function(){
    if(this.checked) getSel('.lorem').style.fontWeight = this.value
    else getSel('.lorem').style.fontWeight = '' 
})
weight.cursive.addEventListener('click', function(){
    if(this.checked) getSel('.lorem').style.fontStyle = this.value
    else getSel('.lorem').style.fontStyle = '' 
})

elements.addEventListener('click', function(){
    if(getSel('#table').checked){
        getSel('.table').setAttribute('class', 'table')
        getSel('.list').setAttribute('class', 'list hide')
        getSel('.elements').style.height = '100%'
    } else if(getSel('#list').checked){
        getSel('.list').setAttribute('class', 'list')
        getSel('.table').setAttribute('class', 'table hide')
        getSel('.elements').style.height = '100%'
    }
})

let table = document.forms['table']
let tagDivTab = document.createElement('div')
table.button.addEventListener('click', function(){
    getSel('.lorem').setAttribute('class', 'lorem block')
    getSel('.styles').setAttribute('class', 'styles block')
    getSel('.mainButton').setAttribute('class', 'mainButton')
    getSel('.elements').setAttribute('class', 'elements block hide')
    let tagTab = document.createElement('table')
    let tagTr;
    for(let i = 1; i<=table.tr.value; i++){
        tagTr = document.createElement('tr')
        let tagTd
        for(let j = 1; j<=table.td.value; j++){
            tagTd = document.createElement('td')
            tagTd.innerText = 'TD'
            tagTd.style.width = `${table.tdw.value}px`
            tagTd.style.height = `${table.tdh.value}px`
            tagTd.style.border = `${table.w.value}px ${table.type.value} ${table.clr.value}`
            tagTr.appendChild(tagTd)
        }
        tagTab.appendChild(tagTr)
    }
    tagDivTab.appendChild(tagTab)
    edit.loremEdit.value += tagDivTab.innerHTML
    getSel('.lorem').style.height = '100%'
    elements.reset()
    table.reset()
})

let liSit = document.forms['liSit']
let tagDivLi = document.createElement('div')
liSit.button.addEventListener('click', function(){
    getSel('.lorem').setAttribute('class', 'lorem block')
    getSel('.styles').setAttribute('class', 'styles block')
    getSel('.mainButton').setAttribute('class', 'mainButton')
    getSel('.elements').setAttribute('class', 'elements block hide')
    let tagUl = document.createElement('ul')
    for(let i = 1; i<=liSit.count.value; i++){
        let tagLi = document.createElement('li')
        tagLi.style.listStyle = liSit.type.value
        tagLi.innerText = `Item ${i}`
        tagUl.appendChild(tagLi)
    }
    tagDivLi.appendChild(tagUl)
    edit.loremEdit.value += tagDivLi.innerHTML
    getSel('.lorem').style.height = '100%'
    console.log(tagUl)
    elements.reset()
    liSit.reset()
})