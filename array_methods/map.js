const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(doubleNum);

function doubleNum(value) {
  return value * 2
}

console.log(doubled);
console.log(numbers);

const peoples = [
  {
    nom: "doe",
    prenom: "john"
  }, 
  {
    nom: "san",
    prenom: "pape"
  }
];

const fullNames1 = peoples.map( person => `FullName: ${person.nom} ${person.prenom}`);
const fullNames2 = peoples.map( (person, i) => ({
  id: i + 1,
  fullName: person.nom + ' ' + person.prenom
}));

console.log(fullNames1, fullNames2);