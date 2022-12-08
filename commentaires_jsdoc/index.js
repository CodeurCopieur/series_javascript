
/**
 * Permet de savoir si l'utilisateur peut conduire
 *
 * @param {number} age
 * @param {string} country Code pays sur 2 caractères
 * @returns {boolean}
 */
function canDrive(age, country) {
  if (age >= 18) {
    return true
  } else if(country === 'US' && age >= 16) {
    return true
  }
  return false
}

function isMajeur(age) {
  return age >= 18
}

const a = canDrive(18, 'FR') // survoler avec la souris le nom de la function
console.log(a);