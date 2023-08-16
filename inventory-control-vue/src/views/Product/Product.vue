<template>
  <div class="products-container">
    <h2>Products</h2>
    <table-list
      :columns="['column1', 'column2', 'column3']"
      :items="[
        { name: 'name1', price: 10, quantity: 10 },
        { name: 'name2', price: 10, quantity: 10 },
        { name: 'name3', price: 10, quantity: 10 },
      ]"
    ></table-list>
  </div>
</template>

<script>
import TableList from "../../components/TableList.vue";

export default {
  components: { TableList },
};
</script>
