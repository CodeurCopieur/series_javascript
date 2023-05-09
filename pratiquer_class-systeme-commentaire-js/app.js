import {fetchJSON} from './functions/api.js'
import {alert} from './functions/alert.js'

class infinitePagination {

  /** @type {HTMLElement} */
  #loader
  /** @type {string} */
  #endpoint
  /** @type {HTMLTemplateElement} */
  #template
  /** @type {HTMLElement} */
  #target
  /** @type {object} */
  #elements
  /** @type {IntersectionObserver} */
  #observer
  /** @type {boolean} */
  #loading = false
  /** @type {number} */
  #page = 1


  /**
   * 
   * @param {HTMLElement} element 
   */
  constructor(element) {
    /**
     * attribut : element
     */
    this.#loader = element
    /**
     * attribut : data-endpoint
     */
    this.#endpoint = element.dataset.endpoint
    /**
     * attribut : data-template
     */
    this.#template = document.querySelector(element.dataset.template)
    /**
     * attribut : data-target
     */
    this.#target = document.querySelector(element.dataset.target)
    /**
     * attribut : data-elements
     */
    this.#elements = JSON.parse(element.dataset.elements)
    this.#observer = new IntersectionObserver( entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          this.#loadMore()
        }
      }
    })

    this.#observer.observe(element)
  }

  async #loadMore() {
    if (this.#loading) {
      return
    }

    this.#loading = true
    try {

      

      const url = new URL(this.#endpoint)
      url.searchParams.set('_page', this.#page)

      const comments = await fetchJSON(url.toString())

      if (comments.length === 0 || this.#page === 3) {
        this.#observer.disconnect()
        this.#loader.remove()
        return
      }

      for (const comment of comments) {
        const commentElement = this.#template.content.cloneNode(true)
        for (const [key, selector] of Object.entries(this.#elements)) {
            commentElement.querySelector(selector).innerText = comment[key]
        }
        this.#target.append(commentElement)
      }

      this.#page++
      this.#loading = false

    } catch (error) {
      this.#loader.style.display = 'none' 

      const erreur = alert('Impossible de charger le contenus')
      erreur.addEventListener('close', () => {
        this.#loader.style.removeProperty('display')
        this.#loading = false
      })

      // this.#target.append(erreur)
      // this.#observer.disconnect()
      // this.#loader.remove()

    }
  }
}

class Fetchform {

    /** @type {string} */
    #endpoint
    /** @type {HTMLTemplateElement} */
    #template
    /** @type {HTMLElement} */
    #target
    /** @type {object} */
    #elements
  
  /**
   * 
   * @param {HTMLFormElement} form 
   */
  constructor(form){

    /**
    * attribut : data-endpoint
    */
    this.#endpoint = form.dataset.endpoint
    /**
     * attribut : data-template
     */
    this.#template = document.querySelector(form.dataset.template)
    /**
     * attribut : data-target
     */
    this.#target = document.querySelector(form.dataset.target)
    /**
     * attribut : data-elements
     */
    this.#elements = JSON.parse(form.dataset.elements)
    form.addEventListener('submit', e => {
      e.preventDefault()
      this.#submitFrom(e.currentTarget)
    })
  }

  /**
   * 
   * @param {HTMLFormElement} form 
   */
  async #submitFrom(form) {
    const btn = form.querySelector('button')
    btn.setAttribute('disabled', '')

    try {

      const data = new FormData(form);
      const comment = await fetchJSON(this.#endpoint, {
        method: 'POST',
        json: Object.fromEntries(data)
        // body: JSON.stringify(Object.fromEntries(data)),
        // headers: {
        //   'Content-type': 'application/json'
        // }
      })

      const commentElement = this.#template.content.cloneNode(true)
      for (const [key, selector] of Object.entries(this.#elements)) {
          commentElement.querySelector(selector).innerText = comment[key]
      }

      this.#target.prepend(commentElement)
      form.reset()
      btn.removeAttribute('disabled')

    } catch (error) {
      
      const erreurElt = alert('Erreur Serveur')
      form.insertAdjacentElement('beforebegin', erreurElt)

      erreurElt.addEventListener('close', () => {
        btn.removeAttribute('disabled')
      })
    }
  }
}

document
  .querySelectorAll('.js-infinite-pagination')
  .forEach( el => new infinitePagination(el))

document
  .querySelectorAll('.js-form-fetch')
  .forEach( form => new Fetchform(form))