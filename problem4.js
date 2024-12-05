/*4.Task: Sorting Objects
Create an array of objects representing cars with properties
 like make, model, and year. Write a function to sort the 
 array of cars by the year of manufacture in ascending order. 
 Print the sorted array.*/

const cars = [
  { make: "Toyota", model: "Corolla", year: 2015 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Ford", model: "Focus", year: 2018 },
];

const sortCars = (carsArray) => {
  return carsArray.sort((a, b) => a.year - b.year);
};

console.log(sortCars(cars));
