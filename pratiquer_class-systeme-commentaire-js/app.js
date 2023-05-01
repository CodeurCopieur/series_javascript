class infinitePagination {
  
  #endpoint
  #template
  #target
  #elements
  #observer


  /**
   * 
   * @param {HTMLElement} element 
   */
  constructor(element) {
    this.#endpoint = element.dataset.endpoint
    this.#template = element.dataset.template
    this.#target = element.dataset.target
    this.#elements = element.dataset.elements

    console.log(this.#target);

    this.#observer = new IntersectionObserver( entries => {
      for (entry of entries) {
        if (entry.isIntersecting) {
          
        }
      }
    })
  }
}

document
  .querySelectorAll('.js-infinite-pagination')
  .forEach( el => new infinitePagination(el))