<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <ListItem :item="item" class="item" @itemchanged="reload" />
    </div>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";

export default {
  name: "ListView",
  props: ["items"],
  components: {
    ListItem,
  },
  setup(props, { emit }) {
    function reload() {
      emit("reloadlist");
    }
    return {
      reload,
    };
  },
};
</script>

<style scoped>
.item {
  background: #e6e6e6;
  padding: 5px;
  margin-top: 5px;
}
</style>
