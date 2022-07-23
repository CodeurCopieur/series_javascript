const ages = [32, 27, 7, 7, 50, 63]

const result = ages.every(isAdult);

function isAdult(age) { 
  return age >= 18;
}

console.log(result);