<template>
  <div class="liked">
    <div class="container">
      <cards-grid
        class="cards-grid"
        :cards="likedCats"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import CardsGrid from '../components/CardsGrid.vue';

export default {
  components: { CardsGrid },
  computed: {
    ...mapState({
      likedCats: (state) => state.likedCats,
    }),
  },
  methods: {
    ...mapActions({
      fetchCats: 'fetchCats',
    }),
  },
};
</script>
