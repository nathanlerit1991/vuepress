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
        <!-- <iframe
          class="neru"
          src="https://www.youtube.com/embed/r4uVfQSPAMM"
          srcdoc=
          "<style>
            body, .full {
              width: 100%;
              height: 100%;
              margin: 0;
              position: absolute;
              display: flex;
              justify-content: center;
            }
          </style>
          <a class='full' href='https://www.youtube.com/embed/r4uVfQSPAMM'>
            <img src='https://www.youtube.com/embed/r4uVfQSPAMM' alt=''>
            <svg
              version='1.1'
              viewBox='0 0 68 48'
              width='68px'
              style='position: relative;'
            >
              <path d='M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z' fill='#f00'></path>
              <path d='M 45,24 27,14 27,34' fill='#fff'></path>
            </svg>
          </a>"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen=""/> -->
        <iframe
          class="lazy"
          src="https://www.youtube.com/embed/r4uVfQSPAMM"
          title="YouTube video player1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
        <iframe
          class="lazy"
          src="https://www.youtube.com/embed/3vGulEj6C3Q"
          title="YouTube video player2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
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
    //Replace all src to data-src onload
    let removeSrc = document.querySelectorAll('.lazy')
    for (const remove of removeSrc) {
      remove.setAttribute('data-src', remove.src)
      remove.src = ""
    }

    //Get all iframes - Add this to component
    let iframeElem = document.getElementsByTagName('iframe');
    for ( let i = 0; i < iframeElem.length; i++ ) {
      if(iframeElem[i].getAttribute('data-src')) {
        this.listIframe.push(iframeElem[i].getAttribute('data-src'))
        iframeElem[i].removeAttribute('data-src')
      }
    }

    //Replace all image data-src to src once the element is visible to the screen
    // function deferAssets() {
    //   let imgElem = document.getElementsByTagName('img');
    //   for ( let i = 0; i < imgElem.length; i++ ) {
    //     if(imgElem[i].getAttribute('data-src')) {
    //       imgElem[i].setAttribute('src',imgElem[i].getAttribute('data-src'));
    //     }
    //   }
    // }

    //Check if element is visible using classname 'lazy'
    // function isInViewport() {
    //   let el = document.querySelector('.lazy')
    //   const rect = el.getBoundingClientRect()
    //   return (
    //     rect.top >= 0 &&
    //     rect.left >= 0 &&
    //     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //   )
    // }

    //Trigger deferAssets function once element is visible in the screen
    // window.addEventListener('scroll', function () {
    //   if (isInViewport()) {
    //     let elementVisible = document.querySelectorAll('.lazy')
    //     for (const visible of elementVisible) {
    //       // this.deferIframeAssets()
    //       deferAssets()
    //     }
    //   }
    // })
  },
  computed: {
    brandName(){
      return this.$page.path.includes('verajohn') ? 'verajohn' : this.$page.path.includes('intercasino') ? 'intercasino' : 'yuugado'
    }
  },
  created () {
     window.addEventListener('scroll', this.handleScroll);
   },
   destroyed () {
     window.removeEventListener('scroll', this.handleScroll);
   },
  methods: {
    isInViewport() {
      let el = document.querySelector('.lazy')
      const rect = el.getBoundingClientRect()
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      )
    },
    deferImageAssets() {
      let imgElem = document.getElementsByTagName('img');
      for ( let i = 0; i < imgElem.length; i++ ) {
        if(imgElem[i].getAttribute('data-src')) {
          imgElem[i].setAttribute('src',imgElem[i].getAttribute('data-src'));
        }
      }
    },
    deferIframeAssets() {
      let deferIframeElem = document.getElementsByTagName('iframe');
      for ( let i = 0; i < deferIframeElem.length; i++ ) {
        this.listIframe.forEach((item, i) => {
          deferIframeElem[i].src = item
        })
      }
    },
    handleScroll (event) {
      if (this.isInViewport()) {
        let elementVisible = document.querySelectorAll('.lazy')
        for (const visible of elementVisible) {
          this.deferIframeAssets()
          this.deferImageAssets()
        }
      }
    }
  }
};
</script>

<style lang="scss">
  @import '~styles/Branding/Verajohn/style.scss';
  @import '~styles/LobbyPages/Verajohn/style.scss';
</style>
