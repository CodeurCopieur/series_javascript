/**
 * Récupère les données associées à un cookie
 * @param {string} name : Nom du cookie à récupérer
 * @return {string | null}
 */
function getCookie(name) {
  const cookies = document.cookie.split('; ')
  const value = cookies
    .find(c => c.startsWith(name))
    ?.split('=')[1]
  if (value === undefined) {
    return null
  }
  return decodeURIComponent(value)
}

/**
 * Créer ou modifie la valeur d'un cookie avec une durée spécifique
 * @param {string} name 
 * @param {string} value 
 * @param {number} days 
 */
function setCookie(name, value, days) {
  const date = new Date()
  date.setFullYear(date.getFullYear() + days)
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`
}

setCookie('hello', 'frist cookie', 10)

// "cookie1=valeur%20avec%20espace; cookie2=valeur2" : ajouter dans les cookies(navigateur)
console.log(getCookie('cookie1'));
console.log(getCookie('hello'));