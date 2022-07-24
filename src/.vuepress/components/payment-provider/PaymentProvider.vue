<template>
  <div class="g-payment-provider">
    <div class="d-flex">
      <p class="txt__primary1 txt--size3">{{ paymentTitle }}</p>
    </div>
    <div class="d-flex">
      <div>
        <img
          v-for="(provider, index) in paymentProviderImages"
          :key="index"
          :src="provider"
          alt="Provider"
        >
    </div>
  </div>
</template>

<script>
  export default {
    name: 'payment-provider',
    props: {
      paymentProviderImages: {
        type: Array,
        required: false,
        default: () => ['']
      },
      paymentTitle: {
        type: String,
        required: true
      }
    }
  }
</script>
<style scoped lang="scss">
.g-payment-provider{
  p {
    margin: 0;
  }
  img {
    width: auto;
    max-height: 25px;
    margin: 8px 2px;
  }
}
</style>
