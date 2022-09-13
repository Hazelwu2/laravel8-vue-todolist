<template>
  <div class="todo-list-container">
    <div class="heading">
      <h2 id="title">Todo List</h2>
      <AddItemForm @reloadlist="getList()" />
    </div>

    <ListView :items="items" @reloadlist="getList()" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
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
  props: ["items"],
  setup(props) {
    const items = ref([]);

    function getList() {
      console.error("[GetList] 取得清單");
      axios
        .get("api/items")
        .then((res) => {
          items.value = res.data;
          console.log(res.data);
        })
        .catch((error) => console.error(error));
    }

    onMounted(() => {
      getList();
    });

    return {
      items,
      getList,
    };
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
