<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <!--      <test-vuetify-component />-->
      <Todos />
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import TestVuetifyComponent from '@/components/test-vuetify-component';
import Todos from '~/components/Todos';
import AddTodo from '~/components/addTodo';
import FilterTodos from '~/components/filterTodos';

export default {
  name: 'App',
  components: {
    TestVuetifyComponent,
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
