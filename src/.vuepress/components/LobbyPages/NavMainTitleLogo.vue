<template>
  <div>
    <a v-if="!title" :href="brand === 'intercasino' ? 'https://intercasino.com/ja' : brand === 'verajohn' ? 'https://verajohn.com/ja' : 'https://yuugado.com/ja'">
      <img class="logo" :src="logo" />
    </a>
    <h2 :class="titleClassName" v-if="title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    brand: {
      type: String,
      required: true
    },
    logo: {
      type: String
    },
    title: {
      type: String
    },
    titleClassName: {
      type: String
    },
  }
}
</script>
