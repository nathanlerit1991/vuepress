<template>
  <div>
    <div>
      <p>{{ games.game_icons_title }}</p>
      <p>
        <a :href="games.all_games_redirect_url">{{ games.all_games_title }}</a>
      </p>
    </div>

    <div class="game-list">
      <div v-for="(list, list_index) in games.game_list" :key="list_index">
        <div>
          <i class="is-hot">{{ list.is_hot }}</i>
          <p>{{ list.image }}</p>
          <p>{{ list.url }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    games: Array
  }
}
</script>
