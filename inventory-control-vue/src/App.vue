<template>
  <div class="app-container">
    <navbar :openSidebar="openSidebar" />
    <sidebar :isExpanded="isExpanded" />
    <div class="view-container" :class="isExpanded ? 'expanded' : 'collapsed'">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: { Sidebar, Navbar },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    openSidebar() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style lang="scss">
@import "./App.scss";
</style>
