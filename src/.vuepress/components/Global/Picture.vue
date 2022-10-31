<template>
  <picture>
    <source type="image/webp" :srcset="srcData + '.webp'">
    <img
      :class="classData"
      :src="srcData"
      :alt="altData"
    />
  </picture>
</template>
<script>
export default {
  name: "Picture",
  props: {
    srcData: {
      type: String,
      required: true
    },
    altData: {
      type: String,
      required: true
    },
    classData: {
      type: String,
      required: false
    }
  }
};
</script>
