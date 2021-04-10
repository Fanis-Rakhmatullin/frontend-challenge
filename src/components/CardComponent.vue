<template>
  <div
    class="card-component"
    ref="card"
  >
    <div
      :class="{liked: isLiked}"
      class="wrapper">
      <img
        class="cat-pic"
        :src=source
        alt="Изображение котика">
      <button
        class="heart"
        @click="$emit('likeCat')"
        @mousedown="animateActiveHeartOn"
        @mouseup="animateActiveHeartOff"
      ></button>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    source: {
      type: String,
      default: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/cat_icon_138789.png',
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    animateActiveHeartOn() {
      this.$refs.card.style.bottom = '6px';
    },
    animateActiveHeartOff() {
      this.$refs.card.style.bottom = '0';
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
  .card-component {
    position: relative;
    transition: 0.5s;
  }
  .wrapper {
    width: 256px;
    height: 256px;
    position: relative;
    border: transparent 16px solid;
    transition: 0.5s;
    &:hover {
      box-shadow: 0 6px 5px rgba(0, 0, 0, 0.24), 0 9px 18px rgba(0, 0, 0, 0.18);
    }
  }
  .cat-pic {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .heart {
    height: 40px;
    width: 40px;
    background: url("../assets/svg/heart.svg") no-repeat;
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 5px;
    opacity: 0;
    transition: 0.5s;
    &:hover {
      background: url("../assets/svg/heart-hover.svg") no-repeat;
    }
    &:active, &:focus {
      outline: none;
    }
  }
  .wrapper:hover {
    .heart {
      opacity: 1;
    }
  }
  .wrapper.liked {
    .heart {
      background: url("../assets/svg/heart-hover.svg") no-repeat;
    }
  }
</style>
