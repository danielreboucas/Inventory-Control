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
.view-container.collapsed {
  padding-left: 50px;
  transition: 300ms;
}

.view-container.expanded {
  padding-left: 250px;
  transition: 300ms;
}

.p-tooltip-text {
  font-size: 10px !important;
}

#side-bar {
  overflow: hidden;
  transition: 300ms;
}

.side-bar-visible {
  width: 250px !important;
}

.side-bar-close {
  width: 50px !important;
}
</style>
