/*1.Task: Array Filtering and Mapping
 Create an array of objects, each representing a person with 
 properties like name, age, and gender. Write a function to 
 filter out all females and then map the remaining people to 
 an array of names. Print the final result.*/

const persons = [
  { name: "Aria", age: 25, gender: "female" },
  { name: "Brooke", age: 30, gender: "female" },
  { name: "Cavin", age: 35, gender: "male" },
  { name: "David", age: 40, gender: "male" },
];

const getMaleNames = () => {
  return persons
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
};

console.log(getMaleNames());
