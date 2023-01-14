import { createElt } from '../functions/dom.js';

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
    elt.innerHTML = `
    <form class="d-flex pb-4">
      <input required="" class="form-control" type="text" placeholder="Acheter des patates..." name="title" data-com.bitwarden.browser.user-edited="yes">
      <button class="btn btn-primary">Ajouter</button>
    </form>
    <main>
        <div class="btn-group mb-4" role="group">
            <button type="button" class=" btn btn-outline-primary active" data-filter="all">Toutes</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="todo">A faire</button>
            <button type="button" class=" btn btn-outline-primary" data-filter="done">Faites</button>
        </div>

        <ul class="list-group"></ul>
    </main>
    `
    
    this.#listElt = elt.querySelector('.list-group')
    for (let todo of this.#todos) {
      const t = new TodoListItem(todo)
      this.#listElt.append(t.elt)
      // t.appendTo(this.#listElt)
    }

    const form = elt.querySelector('form');

    form.addEventListener('submit', e => this.onSubmit(e))
  }

  /**
   * 
   * @param {SubmitEvent} e 
   */
  onSubmit(e) {
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
    // item.appendTo(this.#listElt)

    form.reset()
  }
}

export class TodoListItem {

  #elt

  /** @type {Todo} */
  constructor(todo) {
    const id = `todo-${todo.id}`
    // create li, the checkbox type input, label, button
    const li = createElt('li', {class: 'todo list-group-item d-flex align-items-center'})
    this.#elt = li
    const inputCheckbox = createElt('input', { type:'checkbox', class: 'form-check-input', id, checked: todo.completed ? '' : null })
    const label = createElt('label', {class: 'ms-2 form-check-label', for: id}, todo.title)
    const button = createElt('button', {class: 'ms-auto btn btn-danger btn-sm'})
    button.innerHTML = '<i class="bi-trash"></i>'

    li.append(inputCheckbox)
    li.append(label)
    li.append(button)

    button.addEventListener('click', e => this.remove(e))
    inputCheckbox.addEventListener('change', e => this.toggle(e.currentTarget))
    this.toggle(inputCheckbox)
  
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
  }
}