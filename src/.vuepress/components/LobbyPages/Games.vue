<template>
  <div class="g-game-list o-hidden">
    <div class="d-flex f-no-wrap">
      <div class="h-left">
        <p class="txt-highlight">{{ gameData.game_icons_title }}</p>
      </div>

      <div class="h-right">
        <a :href="gameData.all_games_redirect_url">
          <p class="txt__primary1 txt--size1">{{ gameData.all_games_title }}</p>
        </a>
      </div>
    </div>

    <div class="game-list d-flex o-scroll-y">
      <div v-for="(list, list_index) in gameData.game_list" :key="list_index">
        <a class="left-icon" :href="list.url">
          <i class="is-hot"></i>
          <img width="88" height="88" class="m-auto" :src="list.image" :alt="list.image">
          <p :class="gameTitleClassName" class="txt-ellipsis">{{ list.title }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameList',
  props: {
    gameData: {
      type: Object,
      required: true
    },
    gameTitleClassName: {
      type: String,
      required: true
    }
  }
}
</script>


<style lang="scss">
.game-list {
  grid-gap: 10px;
  img {
    max-width: 88px;
  }
  > div {
    padding: 10px 0;
    min-width: 119px;
  }
}
.txt-ellipsis {
  width: 100px;
}
</style>
