import * as shop from './shop.js'

let storage = document.forms['storage']
let result = document.forms['result']
let getAll = x => document.querySelectorAll(x)

let getId, count, item, sellRes, newBalance, newCheck;

result.add.addEventListener('click', function(){
    document.querySelector('.check').innerText = ''
    for(let i = 0; i < result.product.length; i++){
        if(result.product[i].checked){
            item = result.product[i].value
            getId = result.product[i].id
        }
    }
    count = result.count.value
    if(shop.data.product[getId].count >= count){
        sellRes = shop.sell(getId, count)
        newCheck = sellRes.check
        newBalance = sellRes.balance
        result.resultArea.value += `${shop.showAdd(item, count)}\n`
    } else alert(`${item} - Вибачте, на складі залишилось ${shop.data.product[getId].count} шт.`)
})

result.buy.addEventListener('click', function(){
    document.querySelector('.check').innerText = `${result.resultArea.value}\n Всього: ${newCheck} гривень`
    storage.balance.value = `${newBalance} грн.` 
    for(let i = 0; i<getAll('.product input').length; i++){
        getAll('.product input')[i].value = `${shop.data.product[getAll('.product input')[i].name].count} шт.`
    }
    result.reset()
    shop.resetCheck()
})
