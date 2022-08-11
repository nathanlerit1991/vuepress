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
						<img :src="$page.frontmatter.about_us.header_image" :alt="removeExtension($page.frontmatter.about_us.header_image)" />
					</div>
					<div id="text-wrapper">
						<div v-html="$page.frontmatter.about_us.text_content" />
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	methods: {
    /* eslint-disable no-useless-escape */
    removeExtension (value) {
      return value.replace(/\.[^/.]+$/, '').replace(/^.*[\\\/]/, '')
    }
  }
}
</script>

<style lang="scss">
  .vjfp {
		@import '~styles/Vjfp/style.scss';
	}
</style>