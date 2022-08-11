<template>
	<div>
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
					</div>
				</div>
				<small v-html="$page.frontmatter.welcome_verajohn.text_hyperlink" />
			</div>
		</section>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  @import '~styles/Vjfp/style.scss';
</style>