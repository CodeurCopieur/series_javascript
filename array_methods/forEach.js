const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

// days.forEach(myFunc)

// function myFunc(item, index, arr) {
//   console.log(item, index);
// }

days.forEach( (day, i, arr) => console.log(`Jour ${i+1} : ${day} `))


const ages = [32, 27, 18, 18, 50, 66];

let sum = 0;

ages.forEach( ages  => {
  sum+=ages
})

console.log(sum);
