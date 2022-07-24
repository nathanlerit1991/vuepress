<template>
  <div class="layout-css">
    <LayoutGrid />
    <header>
      <nav id="s-nav-bar-main">
        <div id="nav-home" class="h-left">
          <a :href="`https://${brandData}.com/ja`">
            <img :src="imagesData.homeIcon">
          </a>
        </div>

        <div class="h-center">
          <a :href="`https://${brandData}.com/ja`">
            <img class="logo" :src="imagesData.logo">
          </a>
        </div>

        <div class="h-right">
          <Button
            :btn-text="'ログイン'"
            :btn-link="signInBtnData.link"
            :btn-class-name="'btn-secondary txt--size3'"
          />
        </div>
      </nav>
    </header>
    <main>
      <section>
        <div class="container">
          <div class="row">
            <BannerSlider
              :banner-data="bannerData"
              class="o-hidden"
            />
          </div>
        </div>
      </section>
      <section id="s-games">
        <div class="container separator-top separator-bottom">
          <div class="row">
            <GameList
              :game-data="gameData"
              :game-title-class-name="'txt__primary1 txt--size1'"
            />
          </div>
        </div>
      </section>

      <section id="s-lobby-tiles">
        <div class="container">
          <div class="row">
            <LobbyTiles
              :lobby-tiles-data="lobbyTilesData"
            />
          </div>
        </div>
      </section>

      <section id="s-cta">
        <div>
          <img v-if="imagesData.ctaLogo" class="cta-logo d-block" :src="imagesData.ctaLogo">
          <FooterLinks
            :brand="brandData"
            :footer-data="footerData"
          />
        </div>
      </section>

      <section id="s-seo-contents">
        <div class="container">
          <div class="row">
            <SEOcontent :seoContent="seoData" />
          </div>
        </div>
      </section>

      <footer id="s-footer-icon-wrapper">
        <div class="container footer-icons o-hidden">
          <PaymentProvider
            :payment-title="'入出金方法'"
            :payment-provider-images="imagesData.paymentProvider"
          />
          <GameProvider
            :game-title="'ゲーム配信会社'"
            :game-provider-images="imagesData.gameProvider"
          />
          <License
            :brand="brandData"
            :regulatory-images="imagesData.license"
          />
        </div>
      </footer>
    </main>
    <FooterSticky
      :sign-in-data="signInBtnData"
      :join-data="joinBtnData"
    />
  </div>
</template>

<script>
import LayoutGrid from '../layout-grid/LayoutGrid.vue'
import Button from '../button/Button.vue'
import NavMainTitleLogo from '../nav-main-title-logo/NavMainTitleLogo.vue'
import BannerSlider from '../banner-slider/BannerSlider.vue'
import GameList from '../game-list/GameList.vue'
import LobbyTiles from '../lobby-tiles/LobbyTiles.vue'
import FooterLinks from '../footer-links/FooterLinks.vue'
import PaymentProvider from '../payment-provider/PaymentProvider.vue'
import GameProvider from '../game-provider/GameProvider.vue'
import SEOcontent from '../seo-content/SEOContent.vue'
import License from '../license/License.vue'
import FooterSticky from '../footer-sticky/FooterSticky.vue'

export default {
  components: {
    LayoutGrid,
    Button,
    NavMainTitleLogo,
    BannerSlider,
    GameList,
    LobbyTiles,
    FooterLinks,
    SEOcontent,
    PaymentProvider,
    GameProvider,
    License,
    FooterSticky
  },
  props: {
    brandData: {
      type: String,
      default: ''
    },
    signInBtnData: {
      type: Object,
      default: () => ({})
    },
    joinBtnData: {
      type: Object,
      default: () => ({})
    },
    imagesData: {
      type: Object,
      default: () => ({})
    },
    bannerData: {
      type: Array,
      required: false,
      default: () => []
    },
    gameData: {
      type: Object,
      required: false,
      default: () => ({})
    },
    lobbyTilesData: {
      type: Object,
      required: false,
      default: () => ({})
    },
    footerData: {
      type: Array,
      default: []
    },
    seoData: {
      type: String,
      default: ''
    }
  }
}
</script>
