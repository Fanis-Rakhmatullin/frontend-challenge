<template>
  <header class="header-component">
    <div class="container">
      <nav class="menu">
        <ul class="menu__tabs-list">
          <router-link
            tag="li"
            class="menu__tabs-item"
            to="/"
          >
            <a class="menu__tabs-tab">
              Все котики
            </a>
          </router-link>
          <router-link
            tag="li"
            class="menu__tabs-item"
            to="/liked"
          >
            <a class="menu__tabs-tab">
              Любимые котики
            </a>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header-component {
  background: var(--header-color);
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24);
}

.container {
  height: 61px;
}

.menu {
  height: 100%;
}

.menu__tabs-list {
  height: 100%;
  display: flex;
}

.menu__tabs-tab {
  font-size: var(--font-size);
  padding: 20px 25px;
  color: #FFF;
  opacity: 0.7;
  text-decoration: none;
}

.menu__tabs-item {
  height: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.menu__tabs-item.router-link-exact-active {
  background: var(--header-active-item);

  .menu__tabs-tab {
    opacity: 1;
  }
}
</style>
