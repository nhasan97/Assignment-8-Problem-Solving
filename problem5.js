/*5.Task: Find and Modify
Write a function that searches an array of objects 
for a specific person by name. If found, modify 
their age property. Print the updated array.*/

const persons = [
  { name: "Aria", age: 25, gender: "female" },
  { name: "Brooke", age: 30, gender: "female" },
  { name: "Cavin", age: 35, gender: "male" },
  { name: "David", age: 40, gender: "male" },
];

const findAndModify = (personArray, name, newAge) => {
  const matchedPerson = personArray.find((person) => person.name === name);

  if (matchedPerson) {
    matchedPerson.age = newAge;
    return personArray;
  } else {
    return "Person not found";
  }
};

console.log(findAndModify(persons, "Brooke", 26));
