let studentList = ["Steve", "Michael", "Kevin", "John", "Peter", "Hans"];
console.log("First item of the array is " + studentList[0]);
for (let index = 0; index < studentList.length; index++) {
  console.log(`${index + 1}. student is ${studentList[index]}`);
}

studentList.push("Murat");
studentList.forEach((student, index) => {
  console.log(`${index + 1}. student is ${studentList[index]}`);
});

// I use for loop to remove last 3 elements of the array
for (let index = 0; index < 3; index++) {
  studentList.pop();
}

console.log("Students of the class are " + studentList.toString());

studentList.shift();
console.log("Students of the class are " + studentList.sort().toString());

let personList = [
  { name: "Murat", surname: "Can", age: 32 },
  { name: "Kevin", surname: "Franks", age: 22 },
  { name: "John", surname: "Nash", age: 23 },
  { name: "Steve", surname: "Francis", age: 44 },
];

// I filter the list to find people who is bigger than 30
personList
  .filter((person) => person.age > 30)
  .map((person) => {
    console.log(
      `Person name is ${person.name} ${person.surname} (age ${person.age})`
    );
  });
