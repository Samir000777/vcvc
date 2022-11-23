// let text = "Lex Luter has a big suit"

// console.log(
//     text.slice(14,15).toUpperCase() +
//     text.slice(0,3).toLowerCase()
// );

// let txt = "Lex Luter has a big suit"

// console.log(
//     txt.slice(txt.search('a'), txt.search('a')+ 1) +
//     txt.slice(txt.search('Lex'), txt.search('Lex') + 3)
// );

// let txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet natus voluptas tempore aut consectetur eos, corporis eaque facilis recusandae mollitia ut tempora itaque consequuntur rem culpa? Corporis debitis iusto ipsam."
// console.log(
//     txt.slice(txt.search('sam'), txt.search('sam') + 3).toUpperCase() +
//     txt.slice(txt.search('i'), txt.search('i') + 1) +
//     txt.slice(txt.search('r'), txt.search('r') + 1)
// );

// let box = prompt('Вам есть 18?')

// if(box >= 18) {
//     console.log('skipped');
// } else {
//     console.log('relax')
// }

// let userName = prompt('Как зовут?')
// let userAge = prompt('Вам есть 18?')

// if(userName[0]  ==="A" && userAge >= 18) {
//     console.log('passed');
// } else {
//     console.log('failed')
// }

// let a = +prompt('a')
// let m = prompt('+ - * /')
// let b = +prompt('b')

// if(m === "+"){
//     alert(a+b)
// }else if(m === "-"){
//     alert(a-b)
// }else if(m === "*"){
//     alert(a*b)
// }else if(m === "/"){
//     alert(a/b)
// }

// let name = prompt("Как вас зовут?").toLowerCase()

// if (name === "alex") {
//     let account = prompt("Номер счета?")
//     if (account === '7777'){
//         let money = prompt("Сколько обналичить?")
//         if (money <= 10000) {
//             alert("хорошо")
//         }
//         else {
//             alert("денег недoстаточно")
//         }
//     }
//     else (
//         alert("Пользователь не найден")
//     )
// }
// else {
//     alert("Пользователь не найден")
// }

// let arr  = [1,2,3, ' Azizbek ', true, 'Hello world ', [], ' My name is ', 23, 76, true, [' and I am ', ' years old '], 'Thank you']

// console.log(
//     arr[5],arr[7],arr[3],arr[11][0],arr[8],arr[12]
// );

// let students = ['Azamat', 'Naufal', 'Parviz', 'Amin', 'Samir', 'Daler', 'Kamron']
// let idx = prompt('any numbers')

// students.splice(idx,1)
// console.log(students);

// let students = ['Azamat','Kamron', 'Naufal', 'Parviz', 'Amin', 'Samir', 'Daler', 'Kameron']

// let name = prompt('name');
// let amount = prompt('kol-vo' + name);

// let idx = students.indexOf(name)
// students.splice(idx,amount)
// console.log(students);

// let arr = [
//     {
//         name: "Iskandar",
//         age: 15,
//         isMarried: false,
//         wives: []
//     },
//     {
//         name: "Azizbek",
//         age: 14,
//         isMarried: true,
//         wives: ['Nargiza', 'Madina', 'Gulshexra', 'Gavxar']
//     },
//     {
//         name: "Jamshed",
//         age: 14,
//         isMarried: false,
//         wives: []
//     },
//     {
//         name: "Nazif",
//         age: 15,
//         isMarried: false,
//         wives: []
//     },
//     {
//         name: "Shaxzod",
//         age: 14,
//         isMarried: true,
//         wives: ['shaxzoda', 10]
//     },
//     {
//         name: "Shaxzod",
//         age: 14,
//         isMarried: true,
//         wives: ['shaxzoda', 10]
//     },
//     {
//         name: "Kamron",
//         age: 15,
//         isMarried: false,
//         wives: []
//     },
//     {
//         name: "Daler",
//         age: 16,
//         isMarried: true,
//         wives: ['Aleksandra']
//     },
//     {
//         name: "Samir",
//         age: 17,
//         isMarried: true,
//         wives: ['Amina', 'Sevinch']
//     },
//     {
//         name: "Amin",
//         age: 15,
//         isMarried: false,
//         wives: []
//     },
//     {
//         name: "Parviz",
//         age: 16,
//         isMarried: false,
//         wives: ['Kamilla', 'Jasmina']
//     },
//     {
//         name: "Naufal",
//         age: 14,
//         isMarried: true,
//         wives: ['Amalya', 'Jasmina']
//     },
//     {
//         name: "Azamat",
//         age: 14,
//         isMarried: true,
//         wives: ['Aziza', 'Amina']
//     },
//     {
//         name: "Talat",
//         age: 17,
//         isMarried: false,
//         wives: []
//     },
// ]

// let sorted = arr.sort((a, b) => a.age - b.age)

// console.log(
//     arr.sort()
// );

// let machine = {
//   model: "№13746",
//   name: "Samir",
//   surname: "Shukhratjonov",
//   status: "together forever",
//   job: "businessman",
//   company: {
//     aanJapan: {
//       cars: {
//         toyota: "camari",
//         lexus: "lx, rx",
//       },
//     },
//   },
// };

// const user = {
//     name: 'Iskandar',
//     surname: 'Xasanov',
//     age: 22,
//     status: true,
//     visa: ['Canada', 'USA', 'South Korea'],
//     fullname: function() {
//         return this.name + ' ' + this.surname
//     }
// }

// let passport =  {
//     serries: "AC",
//     number: 1231546444,
//     date: {
//         get: "2015",
//         to: "2025"
//     }
// }

// let newObject = Object.assign({},user,passport);
// let key = Object.keys(newObject);
// let value = Object.values(newObject);
// let all = Object.assign(key,value);

// console.log(newObject);

// all.filter()

// const user = {
//   name: "Iskandar",
//   surname: "Xasanov",
//   age: 22,
//   status: true,
//   visa: ["Canada", "USA", "South Korea"],
//   fullname: function () {
//     return this.name + " " + this.surname;
//   },
// };

// let passport = {
//   serries: "AC",
//   number: 1231546444,
//   date: {
//     get: "2015",
//     to: "2025",
//   },
// };

// let newObj = Object.assign(user, passport);
// let newOne = Object.keys(newObj);
// let newTwo = Object.values(newObj);
// let flower = newOne.concat();

// console.log(newObj);

// flower.filter((item) => {
//   let key = typeof item;
//   if (flower[key]) {
//     flower[key].push(item);
//   }
// });
// console.log(flower);

let products = [
  {
    name: "milk",
    type: "milk",
    price: 10000,
  },
  {
    name: "apple",
    type: "fruit",
    price: 6000,
  },
  {
    name: "vodka",
    type: "alcohol",
    price: 70000,
  },
  {
    name: "tvorog",
    type: "milk",
    price: 15000,
  },
  {
    name: "banan",
    type: "fruit",
    price: 25000,
  },
  {
    name: "pivo",
    type: "alcohol",
    price: 50000,
  },
  {
    name: "cheese",
    type: "milk",
    price: 40000,
  },
  {
    name: "persik",
    type: "fruit",
    price: 23000,
  },
  {
    name: "mochito",
    type: "alcohol",
    price: 120000,
  },
];

function productsSum(products) {
  let sum = 0;
  for (let price = 0; price < products.length; price++) {
    sum += products[price];
  }
  console.log(sum);
}
productsSum(products);

// Найти общ сумму
// Найти среднюю цену
// найти самый дорогой продукт
// найти самый дешевый продукт
