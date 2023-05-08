/**
 * Renvoie un élément HTML représentant une alerte
 * @param {string} msg 
 * @return {HTMLElement}
 */
export function alert(msg) {
  /** @type {HTMLElement} */
  const el = document.querySelector('#alert').content.firstElementChild.cloneNode(true)
  el.querySelector('.js-text').innerText = msg
  el.querySelector('button').addEventListener('click', e => {
    e.preventDefault();
    el.remove()
    el.dispatchEvent(new CustomEvent('close'))
  })

  return el
}