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
    elt.setAttribute(attribute, value)
  }
  return elt
}