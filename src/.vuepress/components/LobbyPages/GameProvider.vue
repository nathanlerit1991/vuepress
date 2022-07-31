<template>
  <div class="g-game-providers">
    <div class="d-flex">
      <p class="txt__primary1 txt--size3">{{ gameTitle }}</p>
    </div>
    <div class="d-flex">
      <div>
        <img-lazy
          v-for="(game_providers, game_providers_index) in gameProviderImages"
          :key="game_providers_index.image"
          :src="`/assets/${brand}/${game_providers.image}`"
          alt="Game Providers"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'
export default {
  name: "game-provider",
  props: {
    brand: {
      type: String,
      required: true
    },
    gameTitle: {
      type: String,
      required: true
    },
    gameProviderImages: {
      type: Array,
      required: false,
      default: () => [""]
    }
  },
  components: { ImgLazy }
};
</script>

<style scoped lang="scss">
.g-game-providers {
  p {
    margin: 0;
  }
  img {
    width: auto;
    max-height: 25px;
    margin: 8px 2px;
  }
}
</style>
