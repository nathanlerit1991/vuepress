<template>
  <div>
    <Games :games="$page.frontmatter.game" />
    <Content/>
  </div>
</template>

<script>
import Games from '../../components/Games'
export default {
  components: {
    Games
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .theme-container {
    background: green;
  }
</style>
