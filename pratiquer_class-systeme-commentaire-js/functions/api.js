/**
 * Intéragit avec une API JSON
 * @param {string} url 
 * @param {RequestInit} options
 */
export async function fetchJSON(url, options = {}) {
  const headers = {Accept: 'application/json', ...options.headers}
  const r  = await fetch(url, {...options, headers})

  if(!r.ok) {
    throw new Error('Erreur serveur', {cause: r})

  }
  
  return await r.json()
}