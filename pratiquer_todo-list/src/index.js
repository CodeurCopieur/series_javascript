import { fetchJSON } from './functions/api.js';
import { createElt } from './functions/dom.js';


try {
  const todos = await fetchJSON('https://jsonplceholder.typicode.com/todos?_limit=5')
  console.log(todos)
} catch (error) {
  const div = createElt('div', {class: 'alert alert-danger', role: 'alert'}, 'Impossible de charger les éléments')
  document.body.prepend(div)
}


