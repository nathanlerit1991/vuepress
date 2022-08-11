<template>
  <div class="g-seo-content">
    <Content />
  </div>
</template>
<script>
export default {
  mounted () {
    const typographyType = [
      'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'A', 'LI'
    ]
    typographyType.forEach((element) => {
      if (element === 'H1') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "heading__primary1 heading--size1"
        }
      }
      if (element === 'H2') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "heading__primary1 heading--size2"
        }
      }
      if (element === 'H3') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "heading__primary1 heading--size3"
        }
      }
      if (element === 'H4') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "heading__primary1 heading--size4"
        }
      }
      if (element === 'H5') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "heading__primary1 heading--size5"
        }
      }
      if (element === 'H6') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "heading__primary1 heading--size6"
        }
      }
      if (element === 'P') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "txt__primary1 txt--size1"
        }
      }
      if (element === 'LI') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "txt__primary1 txt--size1"
        }
      }
      if (element === 'A') {
        let tag = document.querySelectorAll('.g-seo-content ' + element)
        let len = tag !== null ? tag.length : 0
        let i = 0
        for (i; i < len; i++) {
          tag[i].className += "txt-link"
        }
      }
    })
  }
}
</script>
<style scoped lang="scss">
.g-seo-content {
  h1 {
    font-size: 22px;
  }
  h1 {
    font-size: 18px;
  }
  p {
    font-size: 15px;
  }
  > *:first-child {
    margin-top: 0;
  }
  > *:last-child {
    margin-bottom: 0;
  }
}
</style>
