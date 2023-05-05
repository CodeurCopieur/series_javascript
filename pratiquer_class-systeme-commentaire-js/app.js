import {fetchJSON} from './functions/api.js'

class infinitePagination {

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
    const comments = await fetchJSON(this.#endpoint)
    for (const comment of comments) {
      const commentElement = this.#template.content.cloneNode(true)
      for (const [key, selector] of Object.entries(this.#elements)) {
          commentElement.querySelector(selector).innerText = comment[key]
      }
      this.#target.append(commentElement)
    }

    this.#loading = false
  }
}

document
  .querySelectorAll('.js-infinite-pagination')
  .forEach( el => new infinitePagination(el))