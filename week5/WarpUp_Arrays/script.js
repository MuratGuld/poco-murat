// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(array[2]);

array.shift();
array.sort();
array.push("Kiwi");
array.splice(0, 1);
array.reverse();
console.log(array); //[ 'Kiwi', 'Oranges', 'Blueberries' ]
