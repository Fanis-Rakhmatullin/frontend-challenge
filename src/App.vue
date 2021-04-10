<template>
  <div class="app-container">
    <router-view name="header" />
    <router-view />
  </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions({
      fetchCats: 'fetchCats',
      fetchLikedCats: 'fetchLikedCats',
    }),
  },
  created() {
    this.fetchCats();
    this.fetchLikedCats();
  },
};
</script>

<style lang="scss">
@import "assets/styles/main.scss";

.app-container {
  font-family: 'Roboto', sans-serif;
  width: 100%;
}

.header-component {
  margin-bottom: 36px;
}
</style>
