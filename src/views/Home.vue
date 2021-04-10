<template>
  <div class="home">
    <div class="container">
      <cards-grid
        class="cards-grid"
        :cards="cats"
      />
    <div class="loading">... загружаем еще котиков ...</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardsGrid from '../components/CardsGrid.vue';

let debounce = false;

export default {
  components: { CardsGrid },
  computed: {
    ...mapState({
      cats: (state) => state.cats,
    }),
  },
  methods: {
    ...mapActions({
      fetchCats: 'fetchCats',
    }),
    handleScroll() {
      if (debounce) return;
      const scrollPosition = document
        .body.scrollHeight - (window.innerHeight + document.documentElement.scrollTop);
      // "Магическое" число 3 (три пикселя) выбрано вместо 0, чтобы подгрузка срабатывала
      // когда скролл почти внизу но не совсем.
      // Задержка в 800мс для того, чтобы функция не срабатывала несколько раз подряд.
      if (Math.abs(scrollPosition) < 3) {
        this.fetchCats();
        debounce = true;
        setTimeout(() => {
          debounce = false;
        }, 800);
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
  .cards-grid {
    margin-bottom: 50px;
  }
  .loading {
    text-align: center;
    padding-bottom: 30px;
  }
</style>
