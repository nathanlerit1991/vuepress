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
      type: Object,
      required: true
    }
  },
	beforeMount () {
		import('~styles/' + this.template +'/style.scss')
	}
}
</script>
