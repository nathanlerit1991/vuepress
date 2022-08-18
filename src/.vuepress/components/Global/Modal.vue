<template>
  <div class="g-modal">
    <iframe class="lazy" loading="lazy" :data-src="iframeSrc"></iframe>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    iframeSrc: {
      type: String,
      required: true
    }
  }
};
</script>
<style>
iframe {
  width: 100%;
}
</style>
