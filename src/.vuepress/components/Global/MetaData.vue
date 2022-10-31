<template>
  <div/>
</template>
<script>
export default {
	mounted () {
    let head = document.head

    //FAVICON
    let link = document.createElement('link')
    link.rel = 'shortcut icon'
    link.href = '/assets/verajohn/vj_favicon.ico'
    head.appendChild(link)

    //META DATA
    const getMetaData = async items => {
      let seoData = await this.$page.frontmatter.seo
      return seoData
    }
    getMetaData().then(res => {
      Object.keys(res).forEach((content)=>{
        let meta = document.createElement('meta')

        //Robots
        if(content === 'robots' && res[content].length <= 0) {
          res[content] = 'noindex'
          if(this.$page.frontmatter.title && this.$page.frontmatter.description) {
            res[content] = 'index,follow'
          }
          else {
            res[content] = 'noindex'
          }
        }

        //Other meta, if exist
        if(content === 'robots') {
          meta.name = content
          meta.content = res[content]
          head.appendChild(meta)
        }
        if(content === 'keywords') {
          meta.name = content
          meta.content = res[content]
          head.appendChild(meta)
        }
        if(content === 'alternate_links') {
          res[content].forEach(links => {
            let alternateLink = document.createElement("link")
            alternateLink.rel = "alternate"
            alternateLink.href = links.href
            alternateLink.hreflang = links.language
            head.appendChild(alternateLink)
          })
        }
      })
    })
  }
}
</script>
