import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from './functions/api.js';
import { createElt } from './functions/dom.js';


try {

  const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
  // console.log(todos)
  const list = new TodoList(todos)
  list.appendTo(document.querySelector('#todolist'))

} catch (error) {
  /**
   * Afficher une alerte si il ya dysfonctionement de l'API
   */
  const div = createElt('div', {class: 'alert alert-danger', role: 'alert'}, 'Impossible de charger les éléments')
  document.body.prepend(div)
  console.error(error);
}


