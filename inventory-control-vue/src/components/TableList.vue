<template>
  <div class="table-container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-for="(property, index) in item" :key="index">
            {{ property }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableList",
  props: ["items", "columns"],
};
</script>
