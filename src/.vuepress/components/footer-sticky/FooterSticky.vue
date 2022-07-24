<template>
  <aside class="g-footer-sticky">
    <Button
      :btn-text="signInData.label"
      :btn-link="signInData.link"
      :btn-class-name="'btn-secondary'"
    />
    <Button
      :btn-text="joinData.label"
      :btn-link="joinData.link"
      :btn-class-name="'btn-primary'"
    />
  </aside>
</template>

<script>
import Button from '../button/Button.vue'
export default {
  name: 'footer-sticky',
  props: {
    signInData: {
      type: Object,
      required: true
    },
    joinData: {
      type: Object,
      required: true
    }
  },
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
  .g-footer-sticky{
    display: flex;
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 2;

    button{
      flex-grow: 1;
      border-radius: 0;
      height: 50px;
      -ms-flex: 0 0 50%;
      flex: 0 0 50%;
      max-width: 50%;
      margin: 0;
      padding: 0;

      a {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
