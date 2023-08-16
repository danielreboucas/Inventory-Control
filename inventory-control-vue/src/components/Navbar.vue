<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
      <a class="sidebar-button" @click.prevent="openSidebar"
        ><i class="bi bi-list"></i
      ></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    openSidebar: Function,
  },
};
</script>

<style lang="scss" scoped>
.sidebar-button:hover {
  cursor: pointer;
}
.sidebar-button {
  color: white;
  font-size: 24px;
}

.navbar-collapse {
  justify-content: flex-end;
}
</style>
