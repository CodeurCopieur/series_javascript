const ages =  [16, 18, 14, 34, 33, 20]

const res = ages.filter(isAdult);

function isAdult(age) {
  return age >= 18
}

console.log(res);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers.filter( num => num % 2 === 0);

console.log(even);
