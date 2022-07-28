<template>
  <div class="theme-container">
    {{ $page.title }}
    <div v-for="(games, games_index) in $page.games" :key="games_index">
      <p>{{ games.title }}</p>
    </div>
    <Content />
  </div>
</template>

<style scoped>
.theme-container {
  background: red;
}
</style>
