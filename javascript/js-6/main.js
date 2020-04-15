// Task 1
let fibanachi = n => {
    let a = 1;
    let b = 0;
    console.log(a)
    for(let i = 1; i<n; i++){
        let c  = a + b
        console.log(c)
        if(a<b){
            a = c
        } else {
            b = c
        }
    }
}
fibanachi(5)
fibanachi(10)

// Task 2.1
let geoprogres = function(a,b){
    let c = 1;
    let suma = 0;
    for(i = 1; i <= a; i++){
        if(i>1){
            c *= b
        }
        console.log(c)
        suma += c
    }
    console.log(`Сума = ${suma}`)
}
geoprogres(5,2)
geoprogres(4,3)

// Task 2.2
let b1 = 1;
let s = 0;
let geoFormula = function(n, q){
    for(i = 1; i<=n; i++){
    bn = b1 * (q**(i-1));
    console.log(bn)
    s = b1*((1 - (q**n))/(1 - q))
    }
    console.log(`Сума = ${s}`)
}
geoFormula(5,2)
geoFormula(4,3)

// Task 3
let prime = (a, b) => {
    for(let i = a; i<=b; i++){
        let j;
        for(j = 2; j<i; j++){
            if(i%j == 0){
                break
            }
        }
        if(i == j) console.log(i)
    }
}
let numberVid = +prompt('Число від');
let numberDo = +prompt('Число від');
prime(numberVid, numberDo)