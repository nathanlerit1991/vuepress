<template>
  <div>
    <header>
     <nav id="s-nav-bar-main">
        <div id="nav-home" class="h-left">
          <a :href="`https://${brandName}.com/ja`">
            <!-- <img src="~assets/verajohn/LobbyPages/logo.png" alt="Logo"> -->
            <img width="24" height="22" :src="`/assets/${brandName}/LobbyPages/home-icon.png`" alt="Home icon">
          </a>
        </div>

        <div class="h-center">
          <NavMainTitleLogo
            :brand="brandName"
            :logo="`/assets/${brandName}/LobbyPages/logo.png`"
            :title="''"
            :title-class-name="'heading__primary1 heading--size1'"
          />
        </div>

        <div class="h-right">
          <Button
            :btn-text="'ログイン'"
            :btn-link="`https://${brandName}.com/ja/#signin`"
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
          <img class="cta-logo d-block" width="180" height="82" :src="`/assets/${brandName}/LobbyPages/cta.png`" :alt="`${brandName} Logo`">
          <FooterLinks
            :brand="brandName"
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
                :brand="brandName"
                :payment-title="'入出金方法'"
                :payment-provider-images="paymentProvider"
              />
            <GameProvider
              :brand="brandName"
              :game-title="'ゲーム配信会社'"
              :game-provider-images="gameProvider"
            />
            <License :brand="brandName" :regulatory-images="license" />
          </div>
        </footer>
      </main>
    <FooterSticky
      :brand="brandName"
      :sign-in-data="signInBtnData"
      :join-data="joinBtnData"
    />
  </div>
</template>

<script>
import Button from "~components/LobbyPages/Button";
import NavMainTitleLogo from "~components/LobbyPages/NavMainTitleLogo";
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
    NavMainTitleLogo,
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
      listIframe: [],
      gameIframe: '',
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
          image: 'LobbyPages/payment-provider/1-master-icon.png'
        },
        {
          image: 'LobbyPages/payment-provider/2-venus-point.png'
        },
        {
          image: 'LobbyPages/payment-provider/3-bitcoin-icon.png'
        },
        {
          image: 'LobbyPages/payment-provider/4-playsafe-icon.png'
        },
        {
          image: 'LobbyPages/payment-provider/5-eco-icon.png'
        },
        {
          image: 'LobbyPages/payment-provider/6-i-wallet-icon.png'
        }
      ],
      gameProvider: [
        {
          image: 'LobbyPages/game-provider/1-e-icon.png'
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
  mounted () {
    //Check all img dimension then add the approriate dimension
    let imgDimension = document.querySelectorAll('img')
    imgDimension.forEach((img, i) => {
      let imgWidth = img.width
      let imgHeight = img.height

      img.setAttribute('width', imgWidth)
      img.setAttribute('height', imgHeight)
    });

    //Replace all src to data-src onload
    let removeSrc = document.querySelectorAll('.lazy')
    for (const remove of removeSrc) {
      remove.setAttribute('data-src', remove.src)
      remove.src = ""
    }

    //Replace all image data-src to src once the element is visible to the screen
    function deferAssets() {
      let imgElem = document.getElementsByTagName('img');
      for ( let i = 0; i < imgElem.length; i++ ) {
        if(imgElem[i].getAttribute('data-src')) {
          imgElem[i].setAttribute('src',imgElem[i].getAttribute('data-src'));
        }
      }
    }

    //Check if element is visible using classname 'lazy'
    function isInViewport() {
      let el = document.querySelector('.lazy')
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    }

    //Trigger deferAssets function once element is visible in the screen
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', function () {
        if (isInViewport()) {
          let elementVisible = document.querySelectorAll('.lazy')
          for (const visible of elementVisible) {
            deferAssets()
          }
        }
      })
    }
  },
  computed: {
    brandName(){
      return this.$page.path.includes('verajohn') ? 'verajohn' : this.$page.path.includes('intercasino') ? 'intercasino' : 'yuugado'
    }
  },
};
</script>

<style lang="scss">
  @import '~styles/Branding/Verajohn/style.scss';
  @import '~styles/LobbyPages/Verajohn/style.scss';
</style>
