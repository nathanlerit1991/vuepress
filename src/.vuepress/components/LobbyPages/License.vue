<template>
    <div class="g-license">
      <div class="d-flex">
        <div class="license-icon">
          <a
            aria-label="CEG"
            target="_blank"
            rel="noopener"
            :href="`https://verification.curacao-egaming.com/validateview.aspx?domain=${brand}.com`"
          >
            <img :src="`https://verification.curacao-egaming.com/validate.ashx?domain=${brand}.com`" alt="alt img" />
          </a>
          <img-lazy
            v-for="(regulatory_image, regulatory_index) in regulatoryImages"
            :key="regulatory_index"
            :src="regulatory_image.image"
            alt="License"
          />
        </div>
        <div class="license-text">
          <span class="txt__primary3 txt--size3">当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。<br>
            Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。</span>
        </div>
      </div>
    </div>
</template>

<script>
import ImgLazy from 'vuepress-plugin-img-lazy/ImgLazy'

export default {
  name: 'license',
  props: {
    brand: {
      type: String,
      required: true
    },
    regulatoryImages: {
      type: Array,
      required: false,
      default: () => ['']
    }
  },
  components: { ImgLazy }
}
</script>
<style scoped lang="scss">
.g-license{
  img{
    width: 100%;
    max-width: 50px;
    max-height: 100px;
  }
}

@media only screen and (min-width: 280px) {
  .g-license{
    > div{
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
}

@media only screen and (min-width : 768px) {
  .g-license{
    .license-icon{
      -ms-flex: 0 0 20%;
      flex: 0 0 20%;
      max-width: 20%;
    }
    .license-text{
      -ms-flex: 0 0 80%;
      flex: 0 0 80%;
      max-width: 80%;
    }
  }
}
</style>
