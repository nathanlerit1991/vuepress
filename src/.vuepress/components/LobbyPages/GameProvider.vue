<template>
  <div class="g-game-providers">
    <div class="d-flex">
      <p class="txt__primary1 txt--size3">{{ gameTitle }}</p>
    </div>
    <div class="d-flex">
      <div>
        <img
          v-for="(game_providers, game_providers_index) in gameProviderImages"
          :key="game_providers_index.image"
          :src="`/assets/${brand}/${game_providers.image}`"
          alt="Game Providers"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
  }
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
