<template>
  <div>
    <header>
      <nav id="s-nav-bar-main">
        <div id="nav-home" class="h-left">
          <a href="https://verajohn.com/ja">
            <img src="">
          </a>
        </div>
        <div class="h-center">
          <a href="https://verajohn.com/ja">
            <img class="logo" src="">
          </a>
        </div>
        <div class="h-right">
          <Button
            btn-text="'ログイン'"
            btn-link="signInBtnData.link"
            btn-class-name="'btn-secondary txt--size3'"
          />
        </div>
      </nav>
    </header>

    <main>
      <section>
        <div class="container">
          <div class="row">
          </div>
        </div>
      </section>

      <section id="s-games">
        <div class="container separator-top separator-bottom">
          <div class="row">
            {{ $page.frontmatter.game }}
            <GameList
              :game-data="$page.frontmatter.game"
              :game-title-class-name="'txt__primary1 txt--size1'"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Button from '../../components/button/Button'

export default {
  components: {
    Button
  },
  props: {
    gameData: {
      type: Object,
      required: false,
      default: () => ({})
    }
  }
}
</script>

<style>
  .theme-container {
    background: green;
  }
</style>
