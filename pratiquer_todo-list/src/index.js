import { TodoList } from "./components/TodoList.js";
import { fetchJSON } from './functions/api.js';
import { createElt } from './functions/dom.js';


try {
  const fechtTodos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
  const todosInStorage = localStorage.getItem('todos')?.toString()

  var todos = []
  // Si des données sont présentes dans le localStorage
  if (todosInStorage) {
    todos = JSON.parse(todosInStorage)

    // Vérifier si les données de la requête fetch ne sont pas déjà présentes dans le localStorage
    const newTodos = fechtTodos.filter(newTodo => !todos.some(existingTodo => existingTodo.id === newTodo.id));
    // Fusionner les nouvelles données avec celles existantes
    todos = [...todos, ...newTodos]
  } else {
    // Aucune donnée dans le localStorage, utilisez simplement les données de la requête fetch
    todos = fechtTodos;
  }
  
  
  
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


