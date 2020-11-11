<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from '~/components/Todos';
import AddTodo from '~/components/addTodo';
import FilterTodos from '~/components/filterTodos';

export default {
  name: 'App',
  components: {
    FilterTodos,
    AddTodo,
    Todos,
  },
};
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
