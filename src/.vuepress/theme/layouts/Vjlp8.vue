<template>
  <div v-if="$page.frontmatter.layout === 'vjlp8'" id="vjlp8-main" :class="$page.frontmatter.styles">
    <!-- <link href="/styles/Marketing/Vjlp8/style.css" rel="stylesheet"/> -->
    <!-- <MetaData /> -->
    <section id="hero" class="content-visibility">
      <!-- BACKGROUND IMAGES ABOVE THE FOLD / REDUCE LCP -->
      <picture class="above-fold-bg">
        <source :srcset="$page.frontmatter.promo_banner.promo_images.promo_bg_desktop" media="(min-width: 576px)">
        <source :srcset="$page.frontmatter.promo_banner.promo_images.promo_bg_mobile" media="(min-width: 280px)">
        <img :src="$page.frontmatter.promo_banner.promo_images.promo_bg_desktop" alt="verajohn background image">
      </picture>
      <div class="container">
        <div class="row">
          <div>
            <div id="login">
              <div class="btn-login">
                <a rel="noopener" :href="$page.frontmatter.promo_banner.promo_login_button_redirect_url">
                  <i class="material-icons">exit_to_app</i>
                  <span class="d-block">{{ $page.frontmatter.promo_banner.promo_login_button }}</span>
                </a>
              </div>
            </div>

            <img src="/assets/verajohn/logo.png" class="d-block logo" alt="verajohn logo" width="80" height="80"/>
            <div v-html="$page.frontmatter.tracking_pixel" />

            <div id="banner-images" class="m-auto">
              <img :src="$page.frontmatter.promo_banner.promo_images.promo_game_logo" alt="verajohn image" width="450" height="181"/>
              <img :src="$page.frontmatter.promo_banner.promo_images.promo_game_image" alt="verajohn image" width="450" height="64"/>
            </div>

            <div id="banner-text" class="txt-center">
              <h1>{{ $page.frontmatter.promo_banner.promo_large_subtitle }}</h1>
              <p v-if="$page.frontmatter.promo_banner.promo_small_subtitle" v-html="bannerDesc" />
            </div>

            <div id="banner-terms" class="txt-center">
              <button class="btn-register m-auto" :class="$page.frontmatter.styles === 'version2' ? 'animated pulse infinite' : ''">
                <a :href="$page.frontmatter.promo_banner.promo_join_button_redirect_url">
                  {{ $page.frontmatter.promo_banner.promo_join_button }}
                </a>
              </button>
              <small v-html="bannerTerms"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      id="details"
      class="txt-center divider content-visibility"
      v-for="(sections, sections_index) in $page.frontmatter.section" :key="sections_index">
      <div class="container">
        <div class="row">
          <div>
            <h2>{{ sections.title }}</h2>
            <img class="lazy m-auto" alt="alt img" :src="sections.image">
              <button class="btn-register">
                <a rel="noopener" :href="sections.join_button_redirect_url">
                {{ sections.join_button }}
                </a>
              </button>
          </div>
        </div>
      </div>
    </section>

    <section id="payment" class="divider content-visibility">
      <div class="container">
        <picture>
          <source srcset="/assets/verajohn/payment_vj_jp_payments_icon.svg" media="(min-width: 576px)">
          <source srcset="/assets/verajohn/payment_vj_jp_payments_icon_mobile.svg" media="(min-width: 280px)">
          <img class="lazy" src="/assets/verajohn/payment_vj_jp_payments_icon.svg" alt="payment verajohn desktop">
        </picture>
      </div>
    </section>

    <section id="terms" class="divider content-visibility">
      <div v-html="$page.frontmatter.body_script" />
      <div class="container">
        <div class="row">
          <div>
            <Content />
            <ul>
              <li>通常の<a rel="noopener" href="https://verajohn.com/about/terms-and-conditions">利用規約</a>と<a rel="noopener" href="https://verajohn.com/about/promotions-terms-and-conditions">キャンペーン一般利用規約</a>が適用されます。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Footer
      :promo-language-code="$page.frontmatter.promo_locale.promo_language_code"
      :promo-country-code="$page.frontmatter.promo_locale.promo_country_code"
      :landing-page-type="'verajohn'"
    />
  </div>
</template>

<script>
import '~public/styles/Marketing/Vjlp8/style.scss'
import MetaData from '~components/Global/MetaData.vue'
import Footer from '~components/Marketing/Footer.vue'
export default {
  components: {
    MetaData,
    Footer
  },
	data () {
		return {
		}
  },
  computed: {
    bannerDesc () {
      const bannerTitle = this.$page.frontmatter.promo_banner.promo_small_subtitle.split(/\r?\n/)
        .map(title => this.$page.frontmatter.promo_banner.promo_small_subtitle.slice(-1) === '\\'
          ? this.$page.frontmatter.promo_banner.promo_small_subtitle.substring(0, this.$page.frontmatter.promo_banner.promo_small_subtitle.length - 1)
          : title
        )

      if (this.$page.frontmatter.promo_banner.promo_small_subtitle_highlighted) {
        let idx = 0
        this.$page.frontmatter.promo_banner.promo_small_subtitle_highlighted.filter(phrase => phrase)
          .forEach((phrase) => {
            while (bannerTitle.length > idx) {
              if (bannerTitle[idx].includes(phrase)) {
                bannerTitle[idx] = bannerTitle[idx].replace(phrase, `<span class="highlight"><b>${phrase}</b></span>`)
                break
              } else {
                idx++
              }
            }
          })
      }

      return bannerTitle.reduce((oldVal, newVal) => {
        return oldVal + '<br />' + newVal
      })
    },
    bannerTerms () {
      let termsText = this.$page.frontmatter.promo_banner.promo_terms
      this.$page.frontmatter.promo_banner.promo_link_terms.filter(linkText => linkText)
        .forEach((linkText) => {
          if (this.$page.frontmatter.promo_banner.promo_terms.includes(linkText)) {
            termsText = this.$page.frontmatter.promo_banner.promo_terms.replace(linkText, `<a rel="noopener" href="#terms">${linkText}</a>`)
          }
        })
      return termsText
    }
  }
}
</script>
<!--<style src="~styles/Marketing/Vjlp8/style.scss" lang="scss"/>-->
