export default {
  setTodos(state, todos) {
    state.todos = todos;
  },

  newTodo(state, todo) {
    state.todos.unshift(todo);
  },

  deleteTodo(state, id) {
    state.todos = state.todos.filter((todo) => todo.id !== id);
  },

  filterTodos(state, todos) {
    state.todos = todos;
  },

  updateTodo(state, updatedTodo) {
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
};
