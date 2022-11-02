<template>
  <div/>
</template>
<script>
export default {
	data () {
		return {}
	},
  props: {
    template: {
      type: String,
      required: true
    }
  },
  beforeMount () {
		const getPage = async items => {
			let pageData = await this.$page.frontmatter.layout
			return pageData
		}
		getPage().then(res => {
      Object.keys(res).forEach((content)=>{
				if(res === 'VJFrontPage') {
					import('~styles/' + this.template +'/style.scss')
				}
			})
		})
	},
}
</script>
