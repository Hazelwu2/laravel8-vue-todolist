<template>
  <div class="item">
    <input
      type="checkbox"
      @change="updateCheck(item)"
      v-model="item.completed"
    />
    <span :class="[item.completed ? 'completed' : '', 'item-text']">
      {{ item.name }}
    </span>
    <button @click="removeItem(item)" class="transhcan">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "ListItem",
  props: ["item"],

  setup(props, { emit }) {
    function updateCheck(item) {
      axios
        .put(`api/item/${item.id}`, {
          item: item,
        })
        .then((res) => {
          if (res.status === 200) {
            emit("itemchanged");
          }
        })
        .catch((err) => console.error(err));
    }

    function removeItem(item) {
      axios
        .delete(`api/item/${item.id}`)
        .then((res) => {
          if (res.status === 200) {
            emit("itemchanged");
          }
        })
        .catch((error) => console.error(error));
    }

    onMounted(() => {
      console.log(emit);
    });

    return {
      updateCheck,
      removeItem,
    };
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #999;
}
.item-text {
  width: 100%;
  margin-left: 20px;
}
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.transhcan {
  background: #e6e6e6;
  border: 0;
  color: #ff0000;
  outline: none;
}
</style>
