export default {
  async fetchTodos({ commit }) {
    const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
    commit('setTodos', response.data);
  },

  async addTodo({ commit }, title) {
    const response = await this.$axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title,
        completed: false,
      },
    );
    commit('newTodo', response.data);
  },

  async deleteTodo({ commit }, id) {
    await this.$axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

    commit('deleteTodo', id);
  },

  async filterTodos({ commit }, limit) {
    const response = await this.$axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`,
    );
    commit('filterTodos', response.data);
  },

  async updateTodo({ commit }, updatedTodo) {
    const response = await this.$axios.put(
      `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
      updatedTodo,
    );
    commit('updateTodo', response.data);
  },
};
