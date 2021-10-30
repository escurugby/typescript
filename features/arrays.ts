const carMakers: string[] = ['ford', 'toyota', 'bmw'];
//if declared empty, needed typing
const carMakers2: string[] = [];

const carsByMake = [['f150'], ['corola'], ['camaro']];
//if declared empty, needed typing
const carsByMake2: string[][] = [];

//type inference knows that brand is a String
const brand = carMakers.pop();

//we cannot push elements of other types.
//carMakers.push(12);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible Types
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push('test');
