const words = {
  'kayak': true,
  'SOS': true,
  'Kayak': true,
  'Bonjour':true
}

function isPalindrome(word) {
    
  let wordChange = word.split('').reverse().join('');
    // split : renvoie un tableau de lettre du mot
    // reverse : inverse le tableau de lettre
    // join : renvoie une chaine de caractère
    // toUpperCase : convertie en majuscule

    return wordChange.toUpperCase() === word.toUpperCase() ;
}

for (const word in words) {

  console.log(word +':' +words[word], isPalindrome(word));
  if (isPalindrome(word) != words[word]) {
    console.error(isPalindrome(word), word);
  }
}