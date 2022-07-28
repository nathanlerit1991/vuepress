<template>
  <div>
    <header>
     <nav id="s-nav-bar-main">
        <div id="nav-home" class="h-left">
          <a :href="`https://${brand}.com/ja`">
            <!-- <img src="~assets/verajohn/LobbyPages/logo.png" alt="Logo"> -->
            <img :src="`/assets/${brand}/LobbyPages/home-icon.png`" alt="Logo">
          </a>
        </div>

        <div class="h-center">
          <a :href="`https://${brand}.com/ja`">
            <img class="logo" :src="`/assets/${brand}/LobbyPages/logo.png`">
          </a>
        </div>

        <div class="h-right">
          <Button
            :btn-text="'ログイン'"
            :btn-link="`https://${brand}.com/ja/#signin`"
            :btn-class-name="'btn-secondary txt--size3'"
          />
        </div>
      </nav>
    </header>
    <main>
      <section id="s-games">
        <div class="container">
          <div class="row">
            <Games 
              :gameData="$page.frontmatter.game"
              :gameTitleClassName="'txt__primary1 txt--size1'"
            />
          </div>
        </div>
      </section>
      <section id="s-seo-contents">
        <div class="container">
          <div class="row">
            <Content />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Button from "~components/LobbyPages/Button";
import Games from "~components/LobbyPages/Games";
export default {
  components: {
    Button,
    Games
  },
  data () {
    return {}
  },
  computed: {
    brand(){
      return this.$page.path.includes('verajohn') ? 'verajohn' : this.$page.path.includes('intercasino') ? 'intercasino' : 'yuugado'
    }
  }
};
</script>

<style lang="scss">
  @import '~styles/DesignPattern/layout-grid.scss';
  @import '~styles/Branding/Verajohn/style.scss';
  @import '~styles/LobbyPages/Verajohn/style.scss';
</style>
