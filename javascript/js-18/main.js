//task 1 ForEach
let arr1 = [5,6,7,8,9];
let sum1 = 0;
arr1.forEach(function(val){
    sum1 += val
})
console.log(sum1)

//task2 Map
let rez2 = arr1.map(Math.sqrt)
console.log(rez2)

//task3 Every
let arr3 = [{name: 'Ivan', country: 'Ukraine'}, {name: 'Petro', country:'Ukraine'}, {name:'Miguel', country:'Cuba'}]
let rez3 = arr3.every(user => user.country == 'Ukraine')
console.log(rez3)

//task4 Some
let rez4 = arr3.some(user => user.country == 'Cuba')
console.log(rez4)

//task5 Filter
let arr5 = [1, 'string', [3,4], 5, [6,7]]
let rez5 = arr5.filter(val => typeof(val) != 'string' && val != val*1)
console.log(rez5)

//task6 Reduce
let arr6 = [1,2,5,0,4,5,6]
let a = 1
let rez6 = arr6.reduce(function(sum, val){
    if(val == 0) a = 0 
    return a ? sum+val : sum+0
}, 0)
console.log(rez6)

let count = 0;
arr6.reduce(function(sum, val){
    if(sum < 10) count++ 
    return sum + val
}, 0)
console.log(count)

//task7 Any method
let arr7 = [1,-2,3,0,4,-5,6,-11]
let rez7 = arr7.filter(val => val > 0).map(Math.sqrt)
console.log(rez7)