// // Напишите программу которая проверит длину каждого имя в массиве
// // Если длина меньше или равна 5 символам - добавить в массив shortNames
// // *** Сложное *** удалить это же имя из массива users
// // Решение задачи с удалением из массива
// const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
// const shortNames = [];

// users.forEach(user => {
//     if (user.length <= 5) {
//         shortNames.push(user);
//     }
// })

// shortNames.forEach(user => {
//     let index = users.indexOf(user);
//     users.splice(index, 1);
// })

// console.log(shortNames);
// console.log(users);

// // Напишите функцию, которая для каждого имени в массиве
// // выведет в консоль строку 
// // Hello ИМЯ. Your name is ДЛИНА characters long!
// const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
// function checkNameLength(namesArr) {
//     namesArr.forEach(name => {
//         console.log(`Hello ${name}. Your name is ${name.length} characters long!`);
//     })
// }
// checkNameLength(names);


// // напишите функцию которая примет объект в качестве аргумента
// // Функция должна вернуть одну строку
// // Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// // Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// // Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)
// const myCar = {
//     make: 'Honda',
//     model: 'Civic',
//     popular: false,
//     mileage: 10000
// }

// const checkCar = function (car) {
//     let result = `Your ${car.make} ${car.model} `;
//     if (car.popular) {
//         result += 'is popular. ';
//     } else {
//         result += 'is not popular. ';
//     }
//     if (car.mileage >= 100000) {
//         result += 'It is not covered by warranty anymore.'
//     } else {
//         result += 'It is still covered by warranty.'
//     }
//     return result;
// }

// console.log(checkCar(myCar));


// // Напишите функцию которая принимает два числа в качестве аргумента
// // Если число отрицательное, то приводит его к положительному (-10 => 10)
// // И складывает их
// const sumPositiveNumbers = (num1, num2) => {
//     if (num1 < 0) {
//         num1 = 0 - num1;
//     }
//     if (num2 < 0) {
//         num2 = 0 - num2;
//     }
//     return num1 + num2;
// }

// console.log(sumPositiveNumbers(-5, 5));
// console.log(sumPositiveNumbers(-5, -5));
// console.log(sumPositiveNumbers(5, 5));



// // Напишите функцию, которая складывает только положительные числа
// // если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)
// const sumPositiveNumbersOnly = function (num1, num2) {
//     if (num1 < 0 || num2 < 0) {
//         console.log('One of the numbers is negative!');
//     } else {
//         console.log(num1 + num2);
//     }
// }
// sumPositiveNumbersOnly(3, -5);
// sumPositiveNumbersOnly(-3, 5);
// sumPositiveNumbersOnly(3, 5);


// 1
// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for of найдите произведение элементов этого массива.
// Сделайте то же самое с помощью обычного цикла for
const nums = [2, 3, 4, 5, 6, 7, 8];
let res = 1;
for (num of nums) {
    res *= num;
}
console.log(res);
res = 1;
for (num in nums) {
    res *= nums[num];
}
console.log(res);
res = 1;
for (let i = 0; i < nums.length; i++) {
    res *= nums[i];
}
console.log(res);

// 2
// Для каждого элемента объекта вывести строку типа: Riga is in Latvia
// Использовать цикл for in
const countries = {
    UK: 'London',
    USA: 'New-York',
    Estonia: 'Tallinn',
    Finland: 'Helsinki',
    Germany: 'Berlin',
    Italy: 'Rome'
}
for (country in countries) {
    console.log(`${countries[country]} is in ${country}`);
}


// 3
// Дано число 1000, делите его на 2 до тех пор, пока результат не будет меньше 5
// Количество итераций (раз сколько делили) выведите в консоль
let val = 1000;
let cnt = 0;
while (val > 5) {
    val /= 2;
    cnt++;
}
console.log(cnt);


// 4
// Для диапозона чисел от 0 до 999 в пустой массив нужно добавить строки
// строка должна состоять из 4 символов одно из которых число диапозона
// если 5 то строка 0005, если 500 то строка 0500
// PS если понадобиться длина числа, метод length с числом не работает
// String(число) конвертирует число в строку
let emptyArr = [];
for (let i = 0; i < 1000; i++) {
    let numLen = String(i).length;
    if (numLen === 1) {
        emptyArr.push('000' + i);
    } else if (numLen === 2) {
        emptyArr.push('00' + i);
    } else if (numLen === 3) {
        emptyArr.push('0' + i);
    }
}
console.log(emptyArr);


// emptyArr = []; 

// for (let i = 0; i <= 999; i++) {
// const str = String(i);
// const padding = "0000".substring(str.length);
// emptyArr.push(padding + str);
// }
// console.log(emptyArr);

// 5
// Для задоного массива выводить в консоль число если оно чётное
// Как только цикл дойдёт до 23 разорвать цикл
const numbers = [4, 3, 10, 99, 23, 41, 5, 12, 23, 41, 12, 32];
for (num of numbers) {
    if (num % 2 === 0) {
        console.log(num, 'Even');
    }
    if (num === 23) {
        break
    }
}


// 6
// Для заданного массива написать цикл который выведет в консоль
// Код html элемента одной строкой
/*
<ul>
        <li><h1>Hello Jack Smith</h1></li>
        <li><h1>Hello Bob Summers</h1></li>
        <li><h1>Hello Sarah Gold</h1></li>
        <li><h1>Hello Susan Vega</h1></li>
        <li><h1>Hello Mary Roberts</h1></li>
</ul>
*/
const people = [{name: 'Jack', surname: 'Smith'}, {name: 'Bob', surname: 'Summers'}, {name: 'Sarah', surname: 'Gold'}, {name: 'Susan', surname: 'Vega'}, {name: 'Mary', surname: 'Roberts'}];
let htmlString = '<ul>'
for (person of people) {
    htmlString += `\n\t<li><h1>Hello ${person.name} ${person.surname}</h1></li>`
}
htmlString += '\n</ul>'

console.log(htmlString);

// 7
// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное

const oddEven = function (start, end) {
    for (start; start <= end; start++) {
        if (start % 2 === 0) {
            console.log(start, 'Even');
        } else {
            console.log(start, 'Odd');
        }
    }
}
oddEven(10, 50);

// 8
// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше
function whichIsGreater(num1, num2) {
    if (num1 > num2) {
        console.log(num1, 'is greater');
    } else if (num2 > num1) {
        console.log(num2, 'is greater');
    } else {
        console.log('Numbers are equal');
    }
}
whichIsGreater(5, 5);

// 9
// Напишите функцию которая принимает три числа в качестве аргумента
// Находит наибольшее из трёх

const threeNumCompare = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1, 'is largest');
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2, 'is largest');
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3, 'is largest');
    } else {
        console.log('At least two numbers were equal!');
    }
}
threeNumCompare(30, 30, 3);

// 10
// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)
const myProfile = {
    name: 'Jack',
    surname: 'Smith',
    emailVerified: false,
    age: 20,
    gender: 'Male',
    city: 'London',
    zip: 13233,
    hasChildren: false,
    married: true
}

for ([key, val] of Object.entries(myProfile)) {
    if (typeof val === 'string') {
        console.log(key, val);
    }
}

for (key in myProfile) {
    if (typeof myProfile[key] === 'string') {
        console.log(key, myProfile[key]);
    }
}
