"use strict"

function count_even() {
    let even = 0;
    let odd = 0;

    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }

    console.log(`четных = ${even}`);
    console.log(`нечетных = ${odd}`);
    console.log('\n');
}

function fact(f) {
    let fa = 1;

    for (let i = 1; i <= f; i++) {
        fa *= i;
    }

    console.log(`Факториал числа ${f} равен ${fa}`);
    console.log('\n');
}

function mult_table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} * ${i} = ${n*i}`);
    }
    console.log('\n');
}

function add_till_num(a) {
    let b = 0;
    
    for (let i = 1; i <= a; i++) {
        b += i;
    }
{}
    console.log(`Сумма всех чисел до числа ${a} (включительно) равняется ${b}`);
    console.log('\n');
}

function print_num() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    console.log('\n');
}

function num_sequence(fib) {
    let a = 0;
    let b = 1;

    switch (fib) {
        case 0:
            break
        case 1:
            console.log(0);
            break
        case 2:
            console.log(0);
            console.log(1);
            break
        default:
            console.log(0);
            console.log(1);

            for (let i = 1; i <= fib - 2; i++) {
                console.log(a + b);
                b += a;
                a = b - a;
            }
    }
    console.log('\n');
}

count_even();
fact(+prompt("Введите число для факториала"));
mult_table(+prompt("Введите число для таблицы умножения"));
add_till_num(+prompt("Введите число для сложения"));
print_num();
num_sequence(+prompt("Введите число для последовательности Фиббоначи"));