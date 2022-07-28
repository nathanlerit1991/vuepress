<template>
  <button :class="btnClassName">
    <a :href="btnLink">
      {{ btnText }}
    </a>
  </button>
</template>

<script>
export default {
  name: 'button-component',
  props: {
    btnText: {
      type: String,
      required: true
    },
    btnLink: {
      type: String,
      required: true
    },
    btnClassName: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
  button a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
