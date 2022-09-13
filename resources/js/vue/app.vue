<template>
  <div class="todo-list-container">
    <div class="heading">
      <h2 id="title">Todo List</h2>
      <AddItemForm />
    </div>

    <ListView />
  </div>
</template>

<script>
import AddItemForm from "./AddItemForm.vue";
import ListItem from "./ListView.vue";
import ListView from "./ListView.vue";

export default {
  name: "App",
  components: {
    AddItemForm,
    ListItem,
    ListView,
  },
};
</script>

<style scoped>
.todo-list-container {
  width: 350px;
  margin: auto;
}

.heading {
  background: #e6e6e6;
  padding: 10px;
}

#title {
  text-align: center;
}
</style>
