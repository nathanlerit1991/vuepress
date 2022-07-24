<template>
  <div class="g-game-list o-hidden">
    <div class="d-flex f-no-wrap">
      <div v-if="gameData && gameData.gameIconsTitle" class="h-left">
        <p class="txt-highlight">
          {{ gameData.gameIconsTitle }}
        </p>
      </div>
      <div v-if="gameData && gameData.allGamesTitle" class="h-right">
        <a class="n-link" :href="gameData.allGamesRedirectUrl || ''">
          <p class="txt__primary1 txt--size1">{{ gameData.allGamesTitle }}</p>
        </a>
      </div>
    </div>
    <div v-if="gameData && gameData.gameList" class="d-flex o-scroll-y game-list">
      <div v-for="(game, gameIndex) in gameData.gameList" :key="gameIndex">
        <a class="n-link left-icon" :href="game.url">
          <i v-if="game.isHot || false" />
          <img class="m-auto" :src="game.image" :alt="game.title">
          <p :class="gameTitleClassName" class="txt-ellipsis">{{ game.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game-list',
  props: {
    gameData: {
      type: Object,
      required: true
    },
    gameTitleClassName: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
.game-list {
  grid-gap: 10px;

  > div{
    padding: 10px 0;
    min-width: 119px;
  }
}
.t-ellipsis {
  width: 100px;
}
</style>
