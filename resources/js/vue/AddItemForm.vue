<template>
  <div class="add-item">
    <input type="text" v-model="text" />
    <font-awesome-icon
      icon="plus-square"
      @click="addItem"
      :class="[text ? 'active' : 'inactive', 'plus']"
    />
  </div>
</template>

<script>
import axios from "axios";
import { reactive, toRefs, ref } from "vue";

export default {
  name: "AddItemForm",

  setup(props, { emit }) {
    const text = ref({
      name: "",
    });

    function addItem() {
      if (text.value === "") return;
      axios
        .post("api/item/store", {
          item: {
            name: text.value,
          },
        })
        .then((response) => {
          if (response.status === 201) {
            text.value = "";
            emit("reloadlist");
          }
        })
        .catch((error) => console.error(error));
    }

    return {
      text,
      addItem,
    };
  },
};
</script>

<style scoped>
.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  background: #f7f7f7;
  border: 0;
  outline: none;
  padding: 5px;
  margin-right: 10px;
  width: 100%;
}

.plus {
  font-size: 20px;
}

.active {
  color: #00ce25;
}

.inactive {
  color: #999;
}
</style>
