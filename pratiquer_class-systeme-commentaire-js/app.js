import {fetchJSON} from './functions/api.js'

class infinitePagination {

  /** @type {string} */
  #endpoint
  /** @type {HTMLTemplateElement} */
  #template
  /** @type {HTMLElement} */
  #target
  /** @type {string} */
  #elements
  /** @type {IntersectionObserver} */
  #observer


  /**
   * 
   * @param {HTMLElement} element 
   */
  constructor(element) {
    this.#endpoint = element.dataset.endpoint
    this.#template = document.querySelector(element.dataset.template)
    this.#target = document.querySelector(element.dataset.target)
    this.#elements = element.dataset.elements

    console.log(this.#target);

    this.#observer = new IntersectionObserver( entries => {
      for (entry of entries) {
        if (entry.isIntersecting) {
          this.#loadMore()
        }
      }
    })
  }

  async #loadMore() {
    const comments = await fetchJSON(this.#endpoint)
  }
}

document
  .querySelectorAll('.js-infinite-pagination')
  .forEach( el => new infinitePagination(el))