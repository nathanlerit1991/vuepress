<template>
  <div>
    <div class="g-footer-item" v-for="(dataFooterLink, dataFooterLink_index) in footerData" :key="dataFooterLink_index">
      <a class="v-center h-center" :href="`https://${brand}.com${dataFooterLink.link}`">
        <img :src="dataFooterLink.image" alt="footer link">
        <span class="d-inline-block txt__primary1 txt--size2">{{ dataFooterLink.text }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterLinks',
  props: {
    brand: {
      type: String,
      required: true
    },
    footerData: {
      type: Array,
      required: true
    }
  },
}
</script>

<style scoped lang="scss">
  .g-footer-item {
    img {
      max-width: 25px;
      width: 100%;
      height: 100%;
      margin-right: 10px;
    }
  }
</style>
