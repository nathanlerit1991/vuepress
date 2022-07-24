<template>
  <div class="theme-container">
    {{ $page.title }}
    <div v-for="(games, games_index) in $frontmatter.games" :key="games_index">
      <p>{{ games.title }}</p>
      <p>{{ games.url }}</p>
    </div>
    <Bar/>

    <Content/>

    <button @click="btnFn()">Click</button>
    {{ sample }}
  </div>
</template>

<script>
import Bar from '../../components/Foo/Bar'

export default {
  components: {
    Bar
  },
  data () {
    return {
      sample: false
    }
  },
  methods: {
    btnFn() {
      this.sample = !this.sample
    }
  }
}
</script>

<style>
  .theme-container {
    background: green;
  }
</style>
