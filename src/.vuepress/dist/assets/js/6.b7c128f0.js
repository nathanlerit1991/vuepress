(window.webpackJsonp=window.webpackJsonp||[]).push([[6,17],{250:function(t,e,r){"use strict";r.r(e);var a={mounted(){let t=document.head,e=document.createElement("link");e.rel="shortcut icon",e.href="/assets/verajohn/vj_favicon.ico",t.appendChild(e);(async t=>await this.$page.frontmatter.seo)().then(e=>{Object.keys(e).forEach(r=>{let a=document.createElement("meta");"robots"===r&&e[r].length<=0&&(e[r]="noindex",this.$page.frontmatter.title&&this.$page.frontmatter.description?e[r]="index,follow":e[r]="noindex"),"robots"===r&&(a.name=r,a.content=e[r],t.appendChild(a)),"keywords"===r&&(a.name=r,a.content=e[r],t.appendChild(a)),"alternate_links"===r&&e[r].forEach(e=>{let r=document.createElement("link");r.rel="alternate",r.href=e.href,r.hreflang=e.language,t.appendChild(r)})})})}},o=r(13),n=Object(o.a)(a,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=n.exports},268:function(t,e,r){},290:function(t,e,r){"use strict";r(268)},317:function(t,e,r){"use strict";r.r(e);r(88);var a={components:{MetaData:r(250).default},data:()=>({}),computed:{bannerDesc(){const t=this.$page.frontmatter.promo_banner.promo_small_subtitle.split(/\r?\n/).map(t=>"\\"===this.$page.frontmatter.promo_banner.promo_small_subtitle.slice(-1)?this.$page.frontmatter.promo_banner.promo_small_subtitle.substring(0,this.$page.frontmatter.promo_banner.promo_small_subtitle.length-1):t);if(this.$page.frontmatter.promo_banner.promo_small_subtitle_highlighted){let e=0;this.$page.frontmatter.promo_banner.promo_small_subtitle_highlighted.filter(t=>t).forEach(r=>{for(;t.length>e;){if(t[e].includes(r)){t[e]=t[e].replace(r,`<span class="highlight"><b>${r}</b></span>`);break}e++}})}return t.reduce((t,e)=>t+"<br />"+e)},bannerTerms(){let t=this.$page.frontmatter.promo_banner.promo_terms;return this.$page.frontmatter.promo_banner.promo_link_terms.filter(t=>t).forEach(e=>{this.$page.frontmatter.promo_banner.promo_terms.includes(e)&&(t=this.$page.frontmatter.promo_banner.promo_terms.replace(e,`<a rel="noopener" href="#terms">${e}</a>`))}),t}}},o=(r(290),r(13)),n=Object(o.a)(a,(function(){var t=this,e=t._self._c;return e("div",{class:t.$page.frontmatter.styles,attrs:{id:"vjlp8-main"}},[e("section",{attrs:{id:"hero"}},[e("picture",{staticClass:"above-fold-bg"},[e("source",{attrs:{srcset:t.$page.frontmatter.promo_banner.promo_images.promo_bg_desktop,media:"(min-width: 576px)"}}),t._v(" "),e("source",{attrs:{srcset:t.$page.frontmatter.promo_banner.promo_images.promo_bg_mobile,media:"(min-width: 280px)"}}),t._v(" "),e("img",{attrs:{src:t.$page.frontmatter.promo_banner.promo_images.promo_bg_desktop,alt:"verajohn background image"}})]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("div",{attrs:{id:"login"}},[e("div",{staticClass:"btn-login"},[e("a",{attrs:{rel:"noopener",href:t.$page.frontmatter.promo_banner.promo_login_button_redirect_url}},[e("i",{staticClass:"material-icons"},[t._v("exit_to_app")]),t._v(" "),e("span",{staticClass:"d-block"},[t._v(t._s(t.$page.frontmatter.promo_banner.promo_login_button))])])])]),t._v(" "),e("img",{staticClass:"d-block logo",attrs:{src:"/assets/verajohn/logo.png",alt:"verajohn logo"}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.tracking_pixel)}}),t._v(" "),e("div",{staticClass:"m-auto",attrs:{id:"banner-images"}},[e("img",{attrs:{src:t.$page.frontmatter.promo_banner.promo_images.promo_game_logo,alt:"verajohn image"}}),t._v(" "),e("img",{attrs:{src:t.$page.frontmatter.promo_banner.promo_images.promo_game_image,alt:"verajohn image"}})]),t._v(" "),e("div",{staticClass:"txt-center",attrs:{id:"banner-text"}},[e("h1",[t._v(t._s(t.$page.frontmatter.promo_banner.promo_large_subtitle))]),t._v(" "),t.$page.frontmatter.promo_banner.promo_small_subtitle?e("p",{domProps:{innerHTML:t._s(t.bannerDesc)}}):t._e()]),t._v(" "),e("div",{staticClass:"txt-center",attrs:{id:"banner-terms"}},[e("button",{staticClass:"btn-register m-auto",class:"version2"===t.$page.frontmatter.styles?"animated pulse infinite":""},[e("a",{attrs:{href:t.$page.frontmatter.promo_banner.promo_join_button_redirect_url}},[t._v("\n                "+t._s(t.$page.frontmatter.promo_banner.promo_join_button)+"\n              ")])]),t._v(" "),e("small",{domProps:{innerHTML:t._s(t.bannerTerms)}})])])])])]),t._v(" "),t._l(t.$page.frontmatter.section,(function(r,a){return e("section",{key:a,staticClass:"txt-center separator content-visibility",attrs:{id:"details"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("h2",[t._v(t._s(r.title))]),t._v(" "),e("img",{staticClass:"lazy",attrs:{alt:"alt img",src:r.image}}),t._v(" "),e("button",{staticClass:"btn-register"},[e("a",{attrs:{rel:"noopener",href:r.join_button_redirect_url}},[t._v("\n              "+t._s(r.join_button)+"\n              ")])])])])])])})),t._v(" "),t._m(0),t._v(" "),e("section",{staticClass:"separator content-visibility",attrs:{id:"terms"}},[e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.body_script)}}),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("Content"),t._v(" "),t._m(1)],1)])])])],2)}),[function(){var t=this._self._c;return t("section",{staticClass:"separator content-visibility",attrs:{id:"payment"}},[t("div",{staticClass:"container"},[t("picture",[t("source",{attrs:{srcset:"/assets/verajohn/payment_large_jp.svg",media:"(min-width: 576px)"}}),this._v(" "),t("source",{attrs:{srcset:"/assets/verajohn/payment_jp.svg",media:"(min-width: 280px)"}}),this._v(" "),t("img",{staticClass:"lazy",attrs:{src:"/assets/verajohn/payment_large_jp.svg",alt:"payment verajohn desktop"}})])])])},function(){var t=this._self._c;return t("ul",[t("li",[this._v("通常の"),t("a",{attrs:{rel:"noopener",href:"https://verajohn.com/about/terms-and-conditions"}},[this._v("利用規約")]),this._v("と"),t("a",{attrs:{rel:"noopener",href:"https://verajohn.com/about/promotions-terms-and-conditions"}},[this._v("キャンペーン一般利用規約")]),this._v("が適用されます。")])])}],!1,null,null,null);e.default=n.exports}}]);