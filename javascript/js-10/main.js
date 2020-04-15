// task 1
function arrCopy(arr){
    const a = arr.slice(0);
    return a
    // const a = [];
    // for(let key in arr){
    //     a[key] = arr[key]
    // } 
    // return a
}
const arr1 = arrCopy([1,2,3])
console.log(arr1)
const arr2 = arrCopy([1,2,3,[10,20]])
console.log(arr2)


// task 2
function arrToString(arr){
    let b = [];
    for(let key in arr){
        b[key] = arr[key].toString()
    }
    return b
}
const arr01 = arrToString([1,2,3]);
console.log(arr01)
const arr02 = arrToString([10,200,3333]);
console.log(arr02)


// task 3
function getLength(arr){
    let c = [];
    for(let key in arr){
        c[key] = arr[key].length;
    }
    return c
}
const arr001 = getLength(['Ivan', 'Pavlo', 'Ira'])
console.log(arr001)
const arr002 = getLength(['Oleksiy', 'Andriana'])
console.log(arr002)

// task 4
function removeDuplicates(arr){
    let d = []
    arr.forEach(function(val,ind){
        if(d.includes(arr[ind]) == false){
            d.push(arr[ind])
        } 
    })
    return d
}
let arr0001 = removeDuplicates(['html', 'css', 'html', 'js'])
console.log(arr0001)
let arr0002 = removeDuplicates(['html', 'css', 'html', 'js', 'pytjon', 'js', 'scss'])
console.log(arr0002)