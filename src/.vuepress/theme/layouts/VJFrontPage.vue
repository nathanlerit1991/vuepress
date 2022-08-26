<template>
	<div class="vjfp" :style="cssBackground">
		<section id="s-sticky-nav">
			<div class="container">
				<div class="row">
					<small v-html="$page.frontmatter.sticky_nav" />
				</div>
			</div>
		</section>
		<section id="s-welcome">
			<div class="container">
				<div class="row">
					<div id="welcome_wrapper">
						<img width="120" height="120" class="logo" src="/assets/verajohn/Vjfp/logo.png" alt="verajohn logo">
						<div v-html="$page.frontmatter.welcome_verajohn.text_content" />
						<button data-test-id="registration-button" class="btn-primary">
							<a :href="$page.frontmatter.welcome_verajohn.cta_link">
								{{ $page.frontmatter.welcome_verajohn.cta_text }}
							</a>
						</button>
						<small v-html="$page.frontmatter.welcome_verajohn.text_hyperlink" />
					</div>
				</div>
			</div>
		</section>
		<section id="s-about">
			<div class="container">
				<div class="row">
					<div id="image-wrapper">
						<img width="327" height="338" :src="$page.frontmatter.about_us.header_image" alt="lucky" />
					</div>
					<div id="text-wrapper">
						<div v-html="$page.frontmatter.about_us.text_content" />
					</div>
				</div>
			</div>
		</section>

		<section id="s-payment" class="content-visibility">
			<div class="container">
				<div class="row">
					<div>
						<div class="txt-center" v-html="$page.frontmatter.our_payment_methods.text_content" />
						<div id="payment-icons">
							<img
								class="lazy"
								v-for="(paymentIcons, paymentIconsindex) in $page.frontmatter.our_payment_methods.payment_method_icons"
								:key="paymentIconsindex"
								alt="verajohn payment providers"
								:src="paymentIcons.image"
							>
						</div>
					</div>
				</div>
			</div>
    </section>

		<section id="s-testimonials" class="content-visibility">
			<div class="container">
				<div class="row txt-center">
					<div class="testimonial-wrapper">
						<h2> {{ $page.frontmatter.first_customers_quote.title }}</h2>
						<div class="profile-pic">
							<img
								class="lazy"
								:src="$page.frontmatter.first_customers_quote.profile_image"
								alt="verajohn profile"
							>
						</div>
						<p v-html="$page.frontmatter.first_customers_quote.text_content" />
					</div>
				</div>
			</div>
    </section>

		<section id="s-beginners-bonus" class="content-visibility">
			<div class="container no-container">
				<div class="row column-2">
					<div>
						<div class="bonus">
							<div class="image-wrapper image-bg">
								<img class="lazy" :src="$page.frontmatter.beginners_bonus.bg_image" alt="beginners bonus" />
							</div>
							<div class="bonus-description" v-html="$page.frontmatter.beginners_bonus.text_content" />
						</div>
					</div>

					<div>
						<div class="guide">
							<iframe
								title="Verajohn YouTube video"
								class="lazy"
								width="100%"
								height="auto"
								:data-src="$page.frontmatter.beginners_guide.video_url"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
								/>
							<div class="bonus-description" v-html="$page.frontmatter.beginners_guide.text_content" />
						</div>
					</div>
				</div>
				<div class="row h-center">
					<button data-test-id="registration-button" class="btn-primary">
						<a :href="$page.frontmatter.beginners_guide.cta_link">
							{{ $page.frontmatter.beginners_guide.cta_text }}
						</a>
					</button>
				</div>
				<div class="row h-center">
					<small v-html="$page.frontmatter.beginners_guide.text_hyperlink" />
				</div>
			</div>
    </section>
		<section id="s-customer-support" class="content-visibility">
			<div class="container">
				<div class="row">
					<div id="text-wrapper">
						<div v-html="$page.frontmatter.customer_support.text_content" />
					</div>
				</div>
			</div>
		</section>
		<section id="s-testimonials2" class="content-visibility">
			<div class="container">
				<div class="row txt-center">
					<div class="testimonial-wrapper">
						<h2> {{ $page.frontmatter.second_customers_quote.title }}</h2>
						<div class="profile-pic">
							<img class="lazy" :src="$page.frontmatter.second_customers_quote.profile_image" alt="verajohn profile">
						</div>
						<p v-html="$page.frontmatter.second_customers_quote.text_content" />
					</div>
				</div>
			</div>
		</section>
		<section id="s-honourable-mentions" class="content-visibility">
			<div class="container no-container">
				<div class="row txt-center">
					<div v-html="$page.frontmatter.honourable_mentions.text_content" />
				</div>

				<div class="row column-2 honourable-pods">
					<div v-for="(honourableMentionsTile, honourableMentionsTileindex) in $page.frontmatter.honourable_mentions.list_of_tiles"
							:key="honourableMentionsTileindex">
						<div class="box txt-center">
							<div class="image-bg">
								<img class="lazy" :src="honourableMentionsTile.bg_image" alt="verajohn honourable">
							</div>
							<div v-html="honourableMentionsTile.text_content" />
						</div>
					</div>
				</div>

				<div class="row h-center">
					<button data-test-id="registration-button" class="btn-primary">
						<a :href="$page.frontmatter.honourable_mentions.cta_link">
							{{ $page.frontmatter.honourable_mentions.cta_text }}
						</a>
					</button>
				</div>
				<div class="row h-center">
					<small class="small" v-html="$page.frontmatter.honourable_mentions.text_hyperlink" />
				</div>
			</div>
		</section>
		<section id="s-seo-contents" class="content-visibility">
			<div class="container">
				<div class="row">
					<Content class="txt-center" />
				</div>
			</div>
		</section>
		<section id="s-other-info" class="content-visibility">
			<div class="container no-container">
				<div class="row">
					<div>
						<div v-html="$page.frontmatter.other_info.title" />
						<ul>
							<li v-for="(dataInfo, dataInfoindex) in $page.frontmatter.other_info.list_text_links" :key="dataInfoindex">
								<a :href="dataInfo.text_url">{{ dataInfo.text }}</a>
							</li>
						</ul>
						<div class="footer-twitter-button-pure">
							<a :href="$page.frontmatter.twitter_link">
								<img class="lazy" src="/assets/verajohn/Vjfp/twitter.svg" alt="twitter"/>
								<span>{{ $page.frontmatter.twitter_title }}</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<footer class="content-visibility">
			<div class="container">
				<div class="row">
					<div>
						<small class="d-block txt-center">{{ $page.frontmatter.footer_text }}</small>
					</div>
				</div>
				<div class="row footer-icon">
					<a
						class="lazy"
						aria-label="CEG"
						target="_blank"
						rel="noopener"
						href="https://verification.curacao-egaming.com/validateview.aspx?domain=verajohn.com"
					>
						<img loading="lazy" class="lazy curacao-regulator" src="https://verification.curacao-egaming.com/validate.ashx?domain=verajohn.com" alt="curacao regulator">
					</a>
					<img class="lazy" src="/assets/verajohn/Vjfp/20plus.png" alt="20 plus">
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import '~styles/Vjfp/style.scss'
export default {
	mounted () {
		// var head2 = document.head
		// var link = document.createElement("link")
		// link.type = "text/css"
		// link.rel = "preload"
		// link.href = "/assets/Vjfp/style.css"
		// head2.appendChild(link)

		//
		// //FIRST CONTENTFUL PAINT
		// new PerformanceObserver((entryList) => {
		//   for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
		//     console.log('FCP candidate:', entry.startTime, entry);
		//   }
		// }).observe({type: 'paint', buffered: true});
		//
		//
		// //FIRST CONTENTFUL PAINT
		// new PerformanceObserver((entryList) => {
		//   const [pageNav] = entryList.getEntriesByType('navigation');
		//
		//   console.log(`TTFB: ${pageNav.responseStart}`);
		// }).observe({
		//   type: 'navigation',
		//   buffered: true
		// });





		const getMetaData = async items => {
			let seoData = await this.$page.frontmatter.seo
			return seoData;
		}
		getMetaData().then(res => {
			let head = document.head
			Object.keys(res).forEach((content)=>{
				let meta = document.createElement('meta')
				//Robots
				if(content === 'robots' && res[content].length <= 0) {
					res[content] = 'noindex'
					if(this.$page.frontmatter.title && this.$page.frontmatter.description) {
						res[content] = 'index,follow'
					}
					else {
						res[content] = 'noindex'
					}
				}

				//Other meta, if exist
				if(res[content]) {
					meta.name = content
					meta.content = res[content]
					head.appendChild(meta)
				}
			})
		})
	},
	computed: {
    cssBackground () {
			const mainBg = this.$page.frontmatter.vjfp_bg
			const mainBgMobile = this.$page.frontmatter.welcome_verajohn.mobile_bg_image
			const customerSupportBackgroundImage = this.$page.frontmatter.customer_support.bg_image
      return {
				'--main-bg': `url('${mainBg}')`,
				'--main-bg-mobile': `url('${mainBgMobile}')`,
				'--customer-support-background-image': `url('${customerSupportBackgroundImage}')`
      }
    }
	}
}
</script>
