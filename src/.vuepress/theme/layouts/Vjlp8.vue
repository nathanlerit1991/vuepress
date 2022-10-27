<template>
  <div id="vjlp8-main" :class="$page.frontmatter.styles">
    <!-- BACKGROUND IMAGES ABOVE THE FOLD / REDUCE LCP -->
		<picture class="above-fold-bg">
			<source :srcset="$page.frontmatter.promo_banner.promo_images.promo_bg_desktop" media="(min-width: 576px)">
			<source :srcset="$page.frontmatter.promo_banner.promo_images.promo_bg_mobile" media="(min-width: 280px)">
			<img :src="$page.frontmatter.promo_banner.promo_images.promo_bg_desktop" alt="verajohn background image">
		</picture>

    <section id="hero">
      <img src="/assets/verajohn/logo.png" class="m-auto logo"/>
      <div v-html="$page.frontmatter.tracking_pixel" />

      <div id="banner-images" class="m-auto">
        <img :src="$page.frontmatter.promo_banner.promo_images.promo_game_logo" alt="verajohn image"/>
        <img :src="$page.frontmatter.promo_banner.promo_images.promo_game_image" alt="verajohn image"/>
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
    </section>
  </div>
</template>

<script>
// import '~styles/Marketing/Vjlp8/style.scss'
export default {
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