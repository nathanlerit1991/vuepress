<template>
  <div class="g-modal">
    <div class="modal-wrapper">
      <div class="modal-header d-flex">
        <p class="h-left">{{ data.title }}</p>
        <div class="h-right">
          <span class="h-right close" @click="closeFn()">×</span>
        </div>
      </div>
      <div class="modal-body">
        <iframe class="lazy" loading="lazy" :src="data.url"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods:{
    closeFn(){
      this.$emit('closeBtn', false)
    }
  },
};
</script>
<style lang="scss">
.g-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .close {
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
  }
  p {
    margin: 0;
  }

  .modal-wrapper {
    width: 100%;
    height: 100%;
    margin: auto;
    display: block;
    overflow: hidden;
  }

  .modal-header {
    background: #00a1e5;
    padding: 5px 20px;
    align-items: center;
  }
  .modal-body {
    height: 100%;
    max-height: calc(100% - 40px);
    background: #000;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
@media only screen and (min-width : 280px) {
  .modal-wrapper {
    border-bottom: solid 30px #00a1e5;
  }
}
@media only screen and (min-width : 1200px) {
  .modal-wrapper {
    max-width: 90%;
    max-height: calc(100% - 50px);
    border-radius: 8px;
    border: none;
  }
}
</style>
