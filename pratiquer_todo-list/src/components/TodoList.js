import { createElt } from '../functions/dom.js';
import { cloneTemplate } from '../functions/dom.js';

/**
 * @export
 * @class TodoList
 * @typedef {object} Todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class TodoList {

  /** @type {Todo[]} */
  #todos = []

  /** @type {HTMLULELEMNT} */
  #listElt

  /**
   * @param {Todo[]} todos
   */
  constructor(todos) {
    this.#todos = todos
  }

  /**
   * @param {HTMLElement} element
   */
  appendTo(elt) {
    elt.append(cloneTemplate('todolist-layout'))
    
    this.#listElt = elt.querySelector('.list-group')
    for (let todo of this.#todos) {
      const t = new TodoListItem(todo)
      this.#listElt.append(t.elt)
      // t.appendTo(this.#listElt)
    }

    const form = elt.querySelector('form');
    const allBtn = elt.querySelectorAll('.btn-group button');

    form.addEventListener('submit', e => this.#onSubmit(e))
    allBtn.forEach(btn => {
      btn.addEventListener('click', e => this.#toggleFilter(e))
    });

    this.#listElt.addEventListener('delete', ({detail: todo}) => {
      this.#todos = this.#todos.filter( t => t !== todo)
      this.#onUpdate()
    })

    this.#listElt.addEventListener('toggle', ({detail: todo}) => {
      todo.completed = !todo.completed
      this.#onUpdate()
    })
  }

  /**
   * 
   * @param {SubmitEvent} e 
   */
  #onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget
    const title = new FormData(form).get('title').toString().trim();

    if (title === '') {
      return
    }

    const todo = {
      id: Date.now(),
      title,
      completed: false
    }

    const item = new TodoListItem(todo)
    this.#listElt.prepend(item.elt)
    this.#todos.push(todo)
    this.#onUpdate()
    form.reset()
  }

  #onUpdate() {
    localStorage.setItem('todos', JSON.stringify(this.#todos))
  }

  /**
   * 
   * @param {PointEvent} e 
   */
  #toggleFilter(e) {
    e.preventDefault();

    const dataFilter = e.currentTarget.getAttribute('data-filter');
    e.currentTarget.parentElement.querySelector('.active').classList.remove('active')
    e.currentTarget.classList.add('active')

    if (dataFilter === 'todo') {
      this.#listElt.classList.add('hide-completed')
      this.#listElt.classList.remove('hide-todo')
    } else if(dataFilter === 'done') {
      this.#listElt.classList.add('hide-todo')
      this.#listElt.classList.remove('hide-completed')
    } else {
      this.#listElt.classList.remove('hide-todo')
      this.#listElt.classList.remove('hide-completed')
    }
  }
}

export class TodoListItem {

  #elt
  #todo

  /** @type {Todo} */
  constructor(todo) {
    this.#todo = todo
    const id = `todo-${todo.id}`
    const li = cloneTemplate('todolist-item').firstElementChild

    this.#elt = li
    const inputCheckbox = li.querySelector('input')
    inputCheckbox.setAttribute('id', id)
    if (todo.completed) {
      inputCheckbox.setAttribute('checked', '')
    }

    const label = li.querySelector('label')
    label.setAttribute('for', id)
    label.innerText = todo.title

    const button = li.querySelector('button')
    this.toggle(inputCheckbox)

    button.addEventListener('click', e => this.remove(e))
    inputCheckbox.addEventListener('change', e => this.toggle(e.currentTarget))
    
    this.#elt.addEventListener('delete', e => {})
  
  }

  /**
   * @return {HTMLElement} element
   */
  get elt() {
    return this.#elt
  }
  // appendTo(elt) {
  //   elt.append(this.#elt)
  // }

  /**
   * 
   * @param {PointEvent} e 
   */
  remove(e) {
    e.preventDefault();

    // Évènements personnalisés => detail(propager des informations) ,bubbles(propage l'évent), cancelable(annuler l'évent par un preventDefault)
    const event = new CustomEvent('delete', {detail: this.#todo, bubbles: true, cancelable: true})
    this.#elt.dispatchEvent(event)
    if (event.defaultPrevented) {
      return
    }
    this.#elt.remove();
  }

  /**
   * Change l'état (à faire / fait) de la tâche
   * @param {HTMLInputElement} checkbox 
   */
  toggle(checkbox) {
      if(checkbox.checked) {
        this.#elt.classList.add('is-completed')
      } else {
        this.#elt.classList.remove('is-completed')
      }

      const event = new CustomEvent('toggle', {detail: this.#todo, bubbles: true})
      this.#elt.dispatchEvent(event)
  }
}