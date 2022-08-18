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
						<img class="logo" src="/assets/verajohn/Vjfp/logo.png" alt="verajohn logo">
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
						<img :src="$page.frontmatter.about_us.header_image" alt="lucky" />
					</div>
					<div id="text-wrapper">
						<div v-html="$page.frontmatter.about_us.text_content" />
					</div>
				</div>
			</div>
		</section>
		<section id="s-games">
			<div class="container">

				<div class="row txt-center">
					<div v-html="$page.frontmatter.our_games.text_content" />
				</div>

				<div :class="'row column-' + $page.frontmatter.our_games.top_games.length" class="game-list">
					<div v-for="(games, gamesIndex) in $page.frontmatter.our_games.top_games" :key="gamesIndex">
						<h3>{{ games.title }}</h3>
						<p>{{ games.description }}</p>
						<ol>
							<li v-for="(listGames, listGamesIndex) in games.list_top_games" :key="listGamesIndex">
								<span v-if="typeof listGames.url !== 'undefined' && listGames.url !== ''" @click="modal = true, modalData = listGames.url, gameTitle = listGames.name">
									<img class="lazy" :src="listGames.image" alt="verajohn games" />
									{{ listGames.name }}
								</span>
								<p v-else>
									<img class="lazy" :src="listGames.image" alt="verajohn games" />
									{{ listGames.name }}
								</p>
							</li>
						</ol>
					</div>
				</div>
				<div class="row h-center">
					<button data-test-id="registration-button" class="btn-primary">
						<a :href="$page.frontmatter.our_games.cta_link">
							{{ $page.frontmatter.our_games.cta_text }}
						</a>
					</button>
				</div>
				<div class="row h-center">
					<small v-html="$page.frontmatter.our_games.text_hyperlink" />
				</div>
			</div>
		</section>

		<section id="s-payment">
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

		<section id="s-testimonials">
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

		<section id="s-beginners-bonus">
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
		<section id="s-customer-support">
			<div class="container">
				<div class="row">
					<div id="text-wrapper">
						<div v-html="$page.frontmatter.customer_support.text_content" />
					</div>
				</div>
			</div>
		</section>
		<section id="s-testimonials2">
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
		<section id="s-honourable-mentions">
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
		<section id="s-seo-contents">
			<div class="container">
				<div class="row">
					<Content class="txt-center txt-lazy" />
				</div>
			</div>
		</section>
		<section id="s-other-info">
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

		<footer>
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
export default {
	created () {
		let head = document.head
		let meta = document.createElement("meta")
		meta.setAttribute('name', 'hakdog')
		head.appendChild(meta)
	},
	computed: {
    cssBackground () {
			const mainBg = this.$page.frontmatter.vjfp_bg
			const customerSupportBackgroundImage = this.$page.frontmatter.customer_support.bg_image
      return {
				'--main-bg': `url('${mainBg}')`,
				'--customer-support-background-image': `url('${customerSupportBackgroundImage}')`
      }
    }
  }
}
</script>

<style lang="scss">
	@import '~styles/Vjfp/style.scss';
</style>
