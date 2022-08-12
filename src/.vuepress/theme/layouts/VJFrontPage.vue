<template>
	<div class="vjfp">
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
			<div class="container">
				<div class="row column-2">
					<div>
						<div class="bonus txt-center">
							<div v-html="$page.frontmatter.beginners_bonus.text_content" />
							<img class="lazy" :src="$page.frontmatter.beginners_bonus.bg_image" alt="beginners bonus" />
						</div>
					</div>

					<div>
						<div class="guide txt-center">
							<iframe
								class="lazy-frame"
								width="100%"
								height="auto"
								:data-src="$page.frontmatter.beginners_guide.video_url"
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
								/>
							<div v-html="$page.frontmatter.beginners_guide.text_content" />
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
	</div>
</template>

<script>
export default {
	data () {
		return {
			iframes: false
		}
	},
	mounted () {
		setTimeout(function(){ 
			let imgElem = document.querySelectorAll('.lazy-frame')
			for ( let i = 0; i < imgElem.length; i++ ) {
				if(imgElem[i].getAttribute('data-src')) {
					imgElem[i].setAttribute('src',imgElem[i].getAttribute('data-src'));
				}
			}
		}, 3000)
	}
}
</script>

<style lang="scss">
  .vjfp {
		@import '~styles/Vjfp/style.scss';
	}
</style>