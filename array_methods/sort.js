const fruits = ['banana', 'orange', 'apple', 'mango'];
fruits.sort()

console.log(fruits);

const numbers = [4, 2, 5, 1, 3];
numbers.sort();

console.log(numbers);

const points = [40, 100, 1, 5, 25, 10];
// points.sort((a, b) => a - b);
points.sort(compareFunction);

function compareFunction(a, b) {
  // return a - b // Asc Order
  return b - a // Desc Order
}



console.log(points);