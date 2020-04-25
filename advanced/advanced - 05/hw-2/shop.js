let check = 0;
let data = {
    balance: 1000,
    product: {
        beer: {
            count: 100,
            price: 30
        },
        wine: {
            count: 50,
            price: 50
        },
        pepsi: {
            count: 80,
            price: 20
        }
    }  
}

function showAdd(name, count){
    return `${name}: ${count} шт.`
}

function sell(name,count){
    data.product[name].count -= count
    data.balance += count*data.product[name].price
    check += count*data.product[name].price
    return{
        count: data.product[name].count,
        balance: data.balance,
        check: check
    } 
}

function resetCheck(){
    return check = 0
}

export {check, data, showAdd, sell, resetCheck}