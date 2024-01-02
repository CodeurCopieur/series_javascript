/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @param {string} text
 * @returns {HTMLElement}
 */
export function createElt( tagName, attributes = {}, text) {
  const elt = document.createElement(tagName)
  
  if(text){
    elt.innerText = text
  }
    
  for (const [attribute, value] of Object.entries(attributes)) {
    
    if (value !== null) {
      elt.setAttribute(attribute, value)
    }
    
  }
  return elt
}

/**
 * 
 * @param {string} id 
 * @returns {DocumentFragment}
 */
export function cloneTemplate(id) {
  return document.getElementById(id).content.cloneNode(true)
}