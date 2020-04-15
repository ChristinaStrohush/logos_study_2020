// Завдання 1
let n = +prompt('Number');
let result01 = 1;
for(let i = 1; i<=n; i++){
    result01 *= i;
}
console.log(result01);

// Завдання 2
for(let i = 1000; i<9999; i+=3){
    console.log(i);
}

// Завдання 3
for(let i = 1; i<=110; i+=2){
    console.log(i);
}

// Завдання 4
for(let i = 90; i>0; i-=5){
    console.log(i);
}

// Завдання 5
for(let i = 2; i<=2**20; i *= 2){
    console.log(i);
}

// Завдання 6
for(let i = 2; i < 10000; i=2*i-1){
    console.log(i);
}

// Завдання 7
for(i = -166; i<100; i=i*2+200){
    if(i<100 && i>-100){
        console.log(i)
    }
}

// Завдання 8
let a = +prompt('Число');
let b = +prompt('Степінь');
let result08 = 1;
if(b>=0){
    for(let i = 1; i<=b; i++){
        result08 = result08 * a;
    }
} else if(b<0){
    b = -b;
    for(let i = 1; i<=b; i++){
        result08 = result08 * a;
    }
    result08 = 1 / result08;
}
console.log(result08);