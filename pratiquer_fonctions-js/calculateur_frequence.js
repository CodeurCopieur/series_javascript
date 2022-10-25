var phrase = `Vous savez, moi je ne crois pas qu’il y ait de : «bonne ou de mauvaise» situation! Moi, si je devais résumer ma vie aujourd’hui avec vous? je dirais que c’est d’abord des rencontres...`;
var frequencies = {};
const ignored = [',', '?', ':', '!', '«', '»', '...', '’']
let cleanedPhrase = phrase.toLowerCase();

for (const character of ignored) {
  cleanedPhrase = cleanedPhrase.replaceAll(character, '')
}

var words = cleanedPhrase.split(' ')
for (let word of words) {
  if (word !== '') {
    if (frequencies[word]) {
      frequencies[word]++
    } else {
      frequencies[word] = 1
    }
  }
}
const frequenciesArray = [];
for (const key in frequencies) {
  frequenciesArray.push({
    word: key,
    count: frequencies[key]
  })
}
frequenciesArray.sort((a, b) => b.count - a.count)
console.log(frequenciesArray);
console.log(`les mots les plus fréquents sont ${frequenciesArray[0].word}, ${frequenciesArray[1].word}, ${frequenciesArray[2].word}`);

