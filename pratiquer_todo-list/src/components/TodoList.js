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
    
    const listGroup = elt.querySelector('.list-group')
    for (let todo of this.#todos) {
      const t = new TodoListItem(todo)
      t.appendTo(listGroup)
    }
  }
}

export class TodoListItem {

  #elt

  /** @type {Todo} */
  constructor(todo) {
    const id = `todo-${todo.id}`
    // create li, the checkbox type input, label, button
    const li = createElt('li', {class: 'todo list-group-item d-flex align-items-center'})
    const inputCheckbox = createElt('input', { type:'checkbox', class: 'form-check-input', id, checked: todo.completed ? '' : null })
    const label = createElt('label', {class: 'ms-2 form-check-label', for: id}, todo.title)
    const button = createElt('button', {class: 'ms-auto btn btn-danger btn-sm'})
    button.innerHTML = '<i class="bi-trash"></i>'

    li.append(inputCheckbox)
    li.append(label)
    li.append(button)

    button.addEventListener('click', e => this.remove(e))

    this.#elt = li
  }

  /**
   * @param {HTMLElement} element
   */
  appendTo(elt) {
    elt.append(this.#elt)
  }

  /**
   * 
   * @param {PointEvent} e 
   */
  remove(e) {
    e.preventDefault();
    this.#elt.remove();
  }
}