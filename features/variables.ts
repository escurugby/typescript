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
