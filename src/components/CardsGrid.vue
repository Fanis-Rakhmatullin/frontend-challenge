<template>
  <div class="cards-grid">
    <ul class="cards">
      <li
        v-for="card in cards"
        :key="card.id"
        class="cards__item"
      >
        <card-component
          :source="card.url"
          :isLiked="card.liked"
          @likeCat="likeCurrentCat(card)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import CardComponent from './CardComponent.vue';

export default {
  components: { CardComponent },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions({
      likeCat: 'likeCat',
      unlikeCat: 'unlikeCat',
    }),
    likeCurrentCat(card) {
      if (card.liked) {
        this.unlikeCat(card);
      } else {
        this.likeCat(card);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  margin-right: -32px;
  margin-left: -16px;
  column-gap: 17px;
  row-gap: 17px;
  justify-items: center;
}

.cards__item {
  width: fit-content;
}
</style>
