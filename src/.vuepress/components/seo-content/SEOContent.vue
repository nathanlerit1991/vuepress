<template>
  <div>
    <div class="g-seo-content" v-if="seoContent" v-html="seoContent" />
    asdasd
  </div>
</template>
<script>
export default {
  props: {
    seoContent: {
      type: String,
      default: ''
    }
  },
  mounted(){
    this.replaceQuote()
  },
  methods: {
    replaceQuote () {
      this.seoContent = this.seoContent.replace('“', '"')
    }
  }
}
</script>
<style lang="scss" scoped>
.g-seo-content {
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
}
</style>
