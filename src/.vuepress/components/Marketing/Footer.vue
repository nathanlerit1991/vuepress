<template>
  <footer v-if="promoLanguageCode === 'ja' && promoCountryCode === 'jp'" :class="landingPageType">
      <div class="container">
        <div class="row">
          <div>
            <div id="footer-icon">
              <a
                aria-label="Responsible Gaming"
                target="_blank"
                :href="`https://www.${landingPageType}.com/about/responsible-gaming`"
                rel="noopener"
              >
                <img class="twenty-plus lazy" src="/assets/verajohn/Marketing/GlobalFooter/20+.svg" alt="alt img">
              </a>

              <a
                aria-label="Gambling Therapy"
                target="_blank"
                href="https://www.gamblingtherapy.org/en"
                rel="noopener"
              >
                <img class="gambling-therapy lazy" src="/assets/verajohn/Marketing/GlobalFooter/icon_gt.svg" alt="alt img">
              </a>

              <a
                aria-label="Antillephone"
                target="_blank"
                rel="nonoopener"
                :href='`https://validator.antillephone.com/validate?domain=www.${landingPageType}.com&amp;seal_id=aa3c88106145ef3aa07ad31e3efa8118a2269e7fa00ff3df723030c8d1b09d700f3e42459c4900e909e5dc2532cf22cf&amp;stamp=fd265b4461e929a36516a0b93c2abb74`'
                >
                  <img
                    class="lazy"
                    loading="lazy"
                    alt="Antillephone"
                    :src='`https://30e9f1a8-bb61-4842-93a9-dcf37f19f48e.snippet.antillephone.com/sealassets/fd265b4461e929a36516a0b93c2abb74-www.${landingPageType}.com-aa3c88106145ef3aa07ad31e3efa8118a2269e7fa00ff3df723030c8d1b09d700f3e42459c4900e909e5dc2532cf22cf-c2VhbC5wbmc%3D?status=valid`'
                  >
              </a>
            </div>

            <p>
              <a
                aria-label="Responsible Gaming"
                target="blank"
                :href="`https://www.${landingPageType}.com/about/responsible-gaming`"
                rel="noopener"
              >
                ギャンブルには中毒性があります。 自己責任を持ってプレイしてください。
              </a>
            </p>

            <p>当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 39 Scharlooweg, Willemstad, Curaçao）です。</p>
            <p>Breckenridge Curaçao B.V.は、キュラソー州知事により発行されたMaster Gaming License #8048/JAZに基づくAntillephoneにより付与されたサブライセンス#8048/JAZ2021-180を通して、正式に認可、運営されています。</p>
          </div>
        </div>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    promoLanguageCode: {
      type: String,
      required: true
    },
    promoCountryCode: {
      type: String,
      required: true
    },
    landingPageType: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style scoped lang="scss">
.intercasino{
  .gambling-therapy {
    -webkit-filter: grayscale(100%);
    -webkit-filter: grayscale(1);
    filter: grayscale(100%);
  }
}

footer{
  #footer-icon{
    text-align: center;

    img{
      width: 70px;
    }

    > a{
      display: inline-block;
      min-width: 70px;
      vertical-align: middle;
      border: none;
      margin: 0 8px;
    }
  }

  .second-footer{
     padding: 25px 30px;
  }

  p{
    text-align: center;
  }
}
</style>
