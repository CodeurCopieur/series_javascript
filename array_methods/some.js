const ages = [32, 27, 7, 7, 50, 63];

const res = ages.some(isAdult);

function isAdult(age) {
  return age > 18
}

console.log(res);