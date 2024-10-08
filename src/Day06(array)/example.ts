const arr1: number[] = [1, 2, 3];       // 數字 array
// arr1.push('1') // ❌ Argument of type 'string' is not assignable to parameter of type 'number'.
const arr2: string[] = ['1', '2', '3']; // 字串 array


const mixedArr = [1, '2', 3, 4];
mixedArr.push('5');
mixedArr.push(6)
// mixedArr.push({a: 1}) // ❌
// mixedArr.push(true) // ❌
// ---------------------------------------------

const arr3: Array<number> = [1, 2, 3];
const strArr: Array<string> = ["hey", "yo"];

// ---------------------------------------------

interface StringArray {
  [index: number]: string; // 索引簽名
  length: number; // 原有的陣列屬性
}

const myArray: StringArray = ["Hello", "World"];

console.log(myArray) // ["Hello","World"]
console.log(myArray[0]); // Hello
console.log(myArray.length); // 2
// console.log(myArray.foo); // ❌
// console.log(myArray.push("foo")); // ❌

// ---------------------------------------------

// 情境一：二維陣列
const cinemaSeats: boolean[][] = [
  [false, false, false, false],
  [false, false, true, true],
];


// 情境二：同個陣列裡有不同的型別該怎麼寫？
const mixedArr2: (string | number)[] = [1, 2, 3];  // arr1 裡的值可以是「string」或「number」


// 情境三：構造函式創建的陣列
let numArr: Array<number> = new Array(); // 只能接受數字的空陣列
// numArr.push('test') // ❌

let fixedArr: boolean[] = new Array(2); // 只能接受布林且長度為 2 的陣列
console.log(fixedArr); // [,]

let strNewArr: string[]  = new Array('Hi', 'Mike');

// 情境四：陣列中的物件
// 1. 直接定義
let arrayOfObjects: { id: number; name: string; }[] = [
  { id: 1, name: 'Item 1' },
];

// 2. interface
// interface MyObject {
//   id: number;
//   name: string;
//   memo?: string;  // 可選屬性
// }

// let arrayOfObjects: MyObject[] = [
//   { id: 1, name: 'Item 1', memo: 'test' },
// ];

arrayOfObjects.push({ id: 2, name: 'Item 2' });
console.log(arrayOfObjects); // 印出兩個物件
