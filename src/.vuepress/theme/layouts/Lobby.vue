<template>
  <div>
    <header>
     <nav id="s-nav-bar-main">
        <div id="nav-home" class="h-left">
          <a :href="`https://${brand}.com/ja`">
            <!-- <img src="~assets/verajohn/LobbyPages/logo.png" alt="Logo"> -->
            <img width="24" height="22" :src="`/assets/${brand}/LobbyPages/home-icon.png`" alt="Home icon">
          </a>
        </div>

        <div class="h-center">
          <a :href="`https://${brand}.com/ja`">
            <img class="logo" width="73" height="54" :src="`/assets/${brand}/LobbyPages/logo.png`" :alt="`${brand} Logo`">
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
      <section id="s-cta">
        <img class="cta-logo d-block" width="180" height="82" :src="`/assets/${brand}/LobbyPages/cta.png`" :alt="`${brand} Logo`">
        <FooterLinks 
          :brand="brand"
          :footer-data="footerData"
        />
      </section>
      <section id="s-seo-contents">
        <div class="container">
          <div class="row">
            <SEOContent/>
          </div>
        </div>
      </section>

      <footer id="s-footer-icon-wrapper">
        <div class="container footer-icons o-hidden">
          <PaymentProvider
              :payment-title="'入出金方法'"
              :payment-provider-images="paymentProvider"
            />
          <GameProvider
            :game-title="'ゲーム配信会社'"
            :game-provider-images="gameProvider"
          />
          <License :brand="brand" :regulatory-images="license" />
        </div>
      </footer>
    </main>
    <FooterSticky
      :brand="brand"
      :sign-in-data="signInBtnData" 
      :join-data="joinBtnData"
    />
  </div>
</template>

<script>
import Button from "~components/LobbyPages/Button";
import Games from "~components/LobbyPages/Games";
import FooterLinks from "~components/LobbyPages/FooterLinks";
import SEOContent from "~components/LobbyPages/SEOContent";
import PaymentProvider from "~components/LobbyPages/PaymentProvider";
import GameProvider from "~components/LobbyPages/GameProvider";
import License from "~components/LobbyPages/License";
import FooterSticky from "~components/LobbyPages/FooterSticky";
export default {
  components: {
    Button,
    Games,
    FooterLinks,
    SEOContent,
    PaymentProvider,
    GameProvider,
    License,
    FooterSticky
  },
  data () {
    return {
      footerData: [
        {
          text: 'ヘルプ・センター',
          link: '/ja/help',
          image: '/assets/verajohn/LobbyPages/help-icon.png'
        },
        {
          text: 'ビギナーズガイド',
          link: '/ja/about/beginnersguidemb',
          image: '/assets/verajohn/LobbyPages/beginner-guide-icon.png'
        }
      ],
      paymentProvider: [
        {
          image: '/assets/verajohn/LobbyPages/payment-provider/1-master-icon.png'
        },
        {
          image: '/assets/verajohn/LobbyPages/payment-provider/2-venus-point.png'
        },
        {
          image: '/assets/verajohn/LobbyPages/payment-provider/3-bitcoin-icon.png'
        },
        {
          image: '/assets/verajohn/LobbyPages/payment-provider/4-playsafe-icon.png'
        },
        {
          image: '/assets/verajohn/LobbyPages/payment-provider/5-eco-icon.png'
        },
        {
          image: '/assets/verajohn/LobbyPages/payment-provider/6-i-wallet-icon.png'
        }
      ],
      gameProvider: [
        {
          image: '/assets/verajohn/LobbyPages/game-provider/1-e-icon.png'
        }
      ],
      license: [
        {
          image: '/assets/verajohn/LobbyPages/license/20+.svg'
        }
      ],
      signInBtnData: {
        label: 'ログイン',
        link: '/ja/#signin'
      },
      joinBtnData: {
        label: '今すぐ登録しよう',
        link: '/ja/#join'
      },
    }
  },
  computed: {
    brand(){
      return this.$page.path.includes('verajohn') ? 'verajohn' : this.$page.path.includes('intercasino') ? 'intercasino' : 'yuugado'
    }
  }
};
</script>

<style lang="scss">
  @import '~styles/Branding/Verajohn/style.scss';
  @import '~styles/LobbyPages/Verajohn/style.scss';
</style>
