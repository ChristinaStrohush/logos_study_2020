function outer(){
    let res = 0;
    function inner(x){
        res += x;
        console.log(res)
    }
    return inner
}

let sum = outer();
sum(3);
sum(5);
sum(228);