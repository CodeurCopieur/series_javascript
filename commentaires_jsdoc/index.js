// survoler avec la souris le nom de la function ou la variable

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
/**
 * @param {number} age
 * @returns {boolean}
 */
function isMajeur(age) {
  return age >= 18
}
// Array<string>
// string[]
// Promise<{id: number, title: string, body: string}[]>
/**
 *@returns {{id: number, title: string, body: string}}
 */
function fetch() {

}



/**
 * @typedef {Object} Post
 * @property {number} id
 * @property {string} title titre de l'article
 * @property {string} body
 */

/**
 *@return {Promise<Post[]>}
 */
async function fetchPosts() {
  
}


const a = canDrive(18, 'FR') 
const b = fetch()
const c = fetchPosts().then(posts => {
  const post = posts[0]
  // saisir 'post.' le detail des propriétés visible  
})

/**
 *
 *
 * @class A
 */
class A {
  constructor(firstname) {
    this.firstname = firstname
  }
}

const classA = new A();
classA.firstname

/**
 * @type {string[]}
 */
const type = []