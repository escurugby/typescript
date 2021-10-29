//if initialitation and declaration are in the same line, everything works fine
let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let test: boolean[] = [true, false, true];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 20,
  y: 10,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations:
// function that returns type any
const json = '{"x":10, "y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//when declare a variable in one line and initialize later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] == 'green') {
    foundWord = true;
    break;
  }
}

// Variable whose type cannot be inferred
let numbers2 = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers2.length; i++) {
  if (numbers2[i] > 0) {
    numberAboveZero = numbers2[i];
  }
}
