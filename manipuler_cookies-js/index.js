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

// "cookie1=valeur%20avec%20espace; cookie2=valeur2" : ajouter dans les cookies(navigateur)
console.log(getCookie('cookie1'));