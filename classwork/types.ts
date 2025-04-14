// number data type
let n: number = 23;
// string data type
let s: string = "Name";
// boolean data type
let b: boolean = true;
// undefined data type
let a: undefined;
// null data type
let d: null = null;
// symbol data type
let f: symbol = Symbol("i");
// object
let obj: { name: string; age: number; isActive: boolean } = {
  name: "Some name",
  age: 34,
  isActive: true,
};
// array of numbers - (object)
let arr: number[] = [1, 2, 3, 4, 5, 6];
// array of different data types
let arr2: [number, string, number, boolean, string, boolean];
arr2 = [2, "s", 3, true, "t", false];

// creating custom type
type UserType = {
  name: string;
  age: number;
};

// function of number type
function sum(a: number, b: number): number {
  return a + b;
}

// function of string type
function printName(name: string): string {
  return name;
}

// void function
function printHello(): void {
  console.log("Hello");
}

const uA: UserType = {
  name: "uA",
  age: 34,
};

const uB: UserType = {
  name: "uB",
  age: 24,
};

const uC: UserType = {
  name: "uC",
  age: 17,
};

const uD: UserType = {
  name: "uD",
  age: 45,
};

const userTypes: UserType[] = [uA, uB, uC, uD];

function calculateUserAverageAge(users: UserType[]): number {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

function printUserNames(users: UserType[]): string[] {
  return users.map((user) => {
    return user.name;
  });
}

function printUserAges(users: UserType[]): number[] {
  return users.map((user) => {
    return user.age;
  });
}

const res1 = calculateUserAverageAge(userTypes);
const res2 = printUserAges(userTypes);
const res3 = printUserNames(userTypes);
console.log(res1);
console.log(res2);
console.log(res3);


// an object where all the keys are strings and values are numbers
const obj2: { [key: string]: number} = {};
