<template>
  <aside
    class="sidebar"
    :class="isExpanded ? 'sidebar-visible' : 'sidebar-closed'"
  >
    <div class="menu">
      <router-link to="/dashboard" class="button">
        <div class="menu-item">
          <span><i class="bi bi-speedometer2"></i></span>
          <div class="menu-item-text">Painel de controle</div>
        </div>
      </router-link>
      <router-link to="/category" class="button">
        <div class="menu-item">
          <span><i class="bi bi-list-task"></i></span>
          <div class="menu-item-text">Categoria</div>
        </div>
      </router-link>
      <router-link to="/product" class="button">
        <div class="menu-item">
          <span><i class="bi bi-boxes"></i></span>
          <div class="menu-item-text">Produto</div>
        </div>
      </router-link>
      <router-link to="/client" class="button">
        <div class="menu-item">
          <span><i class="bi bi-people-fill"></i></span>
          <div class="menu-item-text">Cliente</div>
        </div>
      </router-link>
      <router-link to="/supplier" class="button">
        <div class="menu-item">
          <span><i class="bi bi-car-front-fill"></i></span>
          <div class="menu-item-text">Fornecedor</div>
        </div>
      </router-link>
    </div>

    <div class="flex"></div>

    <div class="menu config">
      <router-link to="/settings" class="button">
        <div class="menu-item">
          <span><i class="bi bi-gear-fill"></i></span>
          <div class="menu-item-text">Configurações</div>
        </div>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    isExpanded: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.p-tooltip-text {
  font-size: 10px !important;
}

.sidebar {
  background-color: #212529;
  color: white;
  overflow: hidden;
  height: 100%;
  position: absolute;
  transition: 300ms;
}

.sidebar-visible {
  color: white;
  height: 100%;
  position: absolute;
  width: 250px;

  .menu-item-text {
    position: fixed;
    left: 80px;
    color: white;
  }
}

.sidebar-closed {
  width: 50px;

  .menu-item-text {
    display: none;
  }
}

.menu {
  .menu-item {
    display: flex;
    align-items: center;
    .bi {
      padding: 12px;
      font-size: 24px;
      color: white;
    }
  }
  .config {
    margin-bottom: 0px;
  }
}
</style>
