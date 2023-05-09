// /**
//  * Basic type
//  */

// /**
//  * number
//  */

// let number: number = 3;

// /**
//  * null
//  */

// let footer: null;

// /**
//  * string
//  */

// let car = "Bike";
// let bike: String;
// bike = "em";
// let num: number = 10;

// // undefined
// let eem: undefined = undefined;

// // const a: number = 3;

// console.log(bike);

// /**
//  * Object
//  */

// let house: {
//   address: string;
// } = {
//   address: "",
// };

// house.address = "Da Nang";

// /**
//  * Array
//  */

// // fix lỗi ko push đc number và string = cách thêm [n]
// let product: any[] = [];

// product.push(1);
// product.push("d");

// // string[]

// let names = ["Khoa", "Phuoc", "Anh"];

// let address: string[] = [];

// address.push("Da Nang");

// // number[]

// let numbers: number[] = [];
// numbers = [1, 2, 3];

// // object array

// let people: {
//   name: string;
//   age: number;
//   // quy định là array
// }[] = [];

// people.push({ name: "Khoa", age: 23 });

// // quy định kiểu dữ liệu  là func retuen là number
// const sum = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// // cho giá trị khởi tạo
// // Dấu hai chấm (:) trong đoạn mã const sub: (num1: number, num2: number) => number = ... được sử dụng để chỉ định kiểu dữ liệu của biến sub.
// const sub: (num1: number, num2: number) => number = (
//   num1: number,
//   num2: number
// ) => num1 - num2;

// // Dấu bằng (=) trong đoạn mã const handle = () => { console.log(123); } được sử dụng để gán một giá trị cho biến handle
// const handle = () => {
//   console.log(123);
// };

// /**
//  * Union
//  */

// let price: string | number | boolean;
// (price = "khoa"), (price = 4), (price = false);

// let body: { name: string | number } | { firstName: string } = {
//   name: "",
// };
let guitar = ["d", 34, false];
let strArray = ["Dave", "Khoa", 4220];
guitar[0] = 3;

guitar = strArray;
guitar.push("dd");

// string type array
let bands: string[] = [];

// Tuple

let myTuples: [number, number, boolean] = [34, 34, false];
myTuples[0] = 3;

let myObj: object;

myObj = [];

console.log(typeof myObj);

// object

let exampleObject = {
  prop1: "Dave",
  prop2: true,
};

exampleObject.prop1 = "Khoa";
exampleObject.prop2 = false;

type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

// let vh: Guitarist = {
//   name: "Dave",
//   active: false,
//   albums: [1994, 5150, "OU812"],
// };

// const greetGuitarist = (guitarist: Guitarist) => {
//   console.log(`Hello ${guitarist.name.toUpperCase()}`);
// };

// console.log(greetGuitarist(vh));

// enum cho phép định nghĩa một tập hợp các giá trị có thể sử dụng trong chương trình.

// gerneric type

// tưởng tượng type là biến n truyền vào boolean thì trả về boolean
const handleClick = <Type>(value: Type) => value;

let value = 100;
handleClick<string>("100");

// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const add = (a: number, b: number) => a + b;

// const logMsg = (message: any) => {
//   console.log(message);
// };

// logMsg("persons");

// logMsg(add(2, 3));

type mathFunction = (a: number, b: number) => number;

let multiply: mathFunction = (a: number, b: number) => {
  return a - b;
};
