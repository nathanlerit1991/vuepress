<template>
  <div v-if="mdData" class="d-flex">
    <div class="preview" id="element">
      <Vjfp class="template" />
    </div>

    <div class="field-wrapper">
      <form>
        <div class="label">
          <label>Welcome Text Text content</label>
          <textarea v-model="mdData.welcome_verajohn.text_content" />
        </div>

        <div class="label">
          <label>Welcome Text Hyperlink</label>
          <textarea v-model="mdData.welcome_verajohn.text_hyperlink" />
        </div>

        <div class="label">
          <label>Welcome Text CTA text</label>
          <textarea v-model="mdData.welcome_verajohn.cta_text" />
        </div>

        <div class="label">
          <label>Welcome Text CTA link</label>
          <textarea v-model="mdData.welcome_verajohn.cta_link" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Vjfp from './VJFrontPage.vue'
export default {
  components: {
    Vjfp
  },
  data () {
		return {
			mdData: ''
		}
	},
  mounted () {
    this.$site.pages.forEach((item, i) => {
      if(item.frontmatter.slug === 'verajohn-frontpage-ja') {
        this.mdData = item.frontmatter
      }
    })

    window.onload = () => {
      var element = document.getElementById('element');
      var resizer = document.createElement('div');
      resizer.className = 'resizer';
      resizer.style.width = '10px';
      resizer.style.height = '100%';
      resizer.style.background = 'grey';
      resizer.style.position = 'absolute';
      resizer.style.right = 0;
      resizer.style.top = 0;
      resizer.style.zIndex  = 1;
      resizer.style.cursor = 'w-resize';
      element.appendChild(resizer);
      resizer.addEventListener('mousedown', initResize, false);

      function initResize(e) {
       window.addEventListener('mousemove', Resize, false);
       window.addEventListener('mouseup', stopResize, false);
      }
      function Resize(e) {
       element.style.width = (e.clientX - element.offsetLeft) + 'px';
      }
      function stopResize(e) {
        window.removeEventListener('mousemove', Resize, false);
        window.removeEventListener('mouseup', stopResize, false);
      }
    }

  }
}
</script>

<style scoped lang="scss">
.preview {
  resize: horizontal;
  overflow: auto;
  position: relative;
  float: left;
}
.template {
  width: 100%;
}

.label {
  display: block;
  * {
    width: 100%;
  }
}

.field-wrapper {
  padding: 20px;
}

textarea {
  min-width: 100%;
  height: inherit;
  min-height: 100px;
  font-size: 16px;
  font-family: Roboto;
}
</style>
