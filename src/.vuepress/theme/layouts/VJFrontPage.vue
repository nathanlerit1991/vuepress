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
									<img class="lazy" :src="listGames.image" />
									{{ listGames.name }}
								</span>
								<p v-else>
									<img class="lazy" :src="listGames.image" />
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
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .vjfp {
		@import '~styles/Vjfp/style.scss';
	}
</style>