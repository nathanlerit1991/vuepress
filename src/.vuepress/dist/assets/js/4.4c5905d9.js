(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7,17,18],{247:function(t,e,a){},250:function(t,e,a){"use strict";a.r(e);var s={mounted(){let t=document.head,e=document.createElement("link");e.rel="shortcut icon",e.href="/assets/verajohn/vj_favicon.ico",t.appendChild(e);(async t=>await this.$page.frontmatter.seo)().then(e=>{Object.keys(e).forEach(a=>{let s=document.createElement("meta");"robots"===a&&e[a].length<=0&&(e[a]="noindex",this.$page.frontmatter.title&&this.$page.frontmatter.description?e[a]="index,follow":e[a]="noindex"),"robots"===a&&(s.name=a,s.content=e[a],t.appendChild(s)),"keywords"===a&&(s.name=a,s.content=e[a],t.appendChild(s)),"alternate_links"===a&&e[a].forEach(e=>{let a=document.createElement("link");a.rel="alternate",a.href=e.href,a.hreflang=e.language,t.appendChild(a)})})})}},i=a(13),r=Object(i.a)(s,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=r.exports},258:function(t,e,a){"use strict";a(247)},284:function(t,e,a){"use strict";a.r(e);var s={mounted(){let t=document.getElementsByTagName("head")[0],e=document.createElement("script");e.innerHTML=function(){!function(t,e,a,s,i){t[s]=t[s]||[],t[s].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var r=e.getElementsByTagName(a)[0],n=e.createElement(a);n.async=!0,n.src="https://www.googletagmanager.com/gtm.js?id=OPT-K6FTGKG",r.parentNode.insertBefore(n,r)}(window,document,"script","dataLayer")},t.insertBefore(e,t.firstChild);let a=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src="https://www.googleoptimize.com/optimize.js?id=OPT-K6FTGKG",a.insertBefore(s,a.firstChild);let i=document.getElementsByTagName("head")[0],r=document.getElementsByTagName("head")[0],n=document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id=G-V3G0MHZQV3",r.insertBefore(n,r.firstChild);let o=document.createElement("script");o.innerHTML=function(){function t(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],t("js",new Date),t("config","G-V3G0MHZQV3")},i.insertBefore(o,i.firstChild)}},i=a(13),r=Object(i.a)(s,(function(){return(0,this._self._c)("iframe",{staticStyle:{display:"none",visibility:"hidden"},attrs:{loading:"lazy",src:"https://www.googletagmanager.com/ns.html?id=OPT-K6FTGKG",height:"0",width:"0"}})}),[],!1,null,null,null);e.default=r.exports},285:function(t,e,a){"use strict";a.r(e);var s={name:"Modal",props:{data:{type:Object,required:!0}},methods:{closeFn(){this.$emit("closeBtn",!1)}}},i=(a(258),a(13)),r=Object(i.a)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"g-modal"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-header d-flex"},[e("p",{staticClass:"h-left"},[t._v(t._s(t.data.title))]),t._v(" "),e("div",{staticClass:"h-right"},[e("span",{staticClass:"h-right close",on:{click:function(e){return t.closeFn()}}},[t._v("×")])])]),t._v(" "),e("div",{staticClass:"modal-body"},[e("iframe",{staticClass:"lazy",attrs:{loading:"lazy",src:t.data.url}})])])])}),[],!1,null,null,null);e.default=r.exports},289:function(t,e,a){},316:function(t,e,a){"use strict";a.r(e);a(289);var s=a(284),i=a(250),r=a(285),n={components:{TrackingScript:s.default,MetaData:i.default,Modal:r.default},data:()=>({isModal:!1,modalData:{}}),methods:{closeModal(t){this.isModal=t},modalFn(t,e){this.isModal=!this.isModal,this.modalData={url:t,title:e}}}},o=a(13),l=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lazy-background",attrs:{id:"vjfp","data-style":`--customer-support-background-image: url('${t.$page.frontmatter.customer_support.bg_image}');`}},[e("MetaData"),t._v(" "),e("picture",{staticClass:"above-fold-bg"},[e("source",{attrs:{srcset:t.$page.frontmatter.vjfp_bg,media:"(min-width: 576px)"}}),t._v(" "),e("source",{attrs:{srcset:t.$page.frontmatter.welcome_verajohn.mobile_bg_image,media:"(min-width: 280px)"}}),t._v(" "),e("img",{attrs:{src:t.$page.frontmatter.vjfp_bg,alt:"verajohn background image"}})]),t._v(" "),t.isModal?e("Modal",{attrs:{data:this.modalData},on:{closeBtn:t.closeModal}}):t._e(),t._v(" "),e("section",{attrs:{id:"s-sticky-nav"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("small",{domProps:{innerHTML:t._s(t.$page.frontmatter.sticky_nav)}})])])]),t._v(" "),e("section",{attrs:{id:"s-welcome"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{attrs:{id:"welcome_wrapper"}},[e("img",{staticClass:"logo",attrs:{width:"120",height:"120",src:"/assets/verajohn/Vjfp/logo.png",alt:"verajohn logo"}}),t._v(" "),e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.welcome_verajohn.text_content)}}),t._v(" "),e("button",{staticClass:"btn-primary",attrs:{"data-test-id":"registration-button"}},[e("a",{attrs:{href:t.$page.frontmatter.welcome_verajohn.cta_link}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$page.frontmatter.welcome_verajohn.cta_text)+"\n\t\t\t\t\t\t\t")])]),t._v(" "),e("small",{domProps:{innerHTML:t._s(t.$page.frontmatter.welcome_verajohn.text_hyperlink)}})])])])]),t._v(" "),e("section",{attrs:{id:"s-about"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{attrs:{id:"image-wrapper"}},[e("img",{attrs:{width:"327",height:"338",src:t.$page.frontmatter.about_us.header_image,alt:"lucky"}})]),t._v(" "),e("div",{attrs:{id:"text-wrapper"}},[e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.about_us.text_content)}})])])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-games"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row txt-center"},[e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.our_games.text_content)}})]),t._v(" "),e("div",{staticClass:"game-list",class:"row column-"+t.$page.frontmatter.our_games.top_games.length},t._l(t.$page.frontmatter.our_games.top_games,(function(a,s){return e("div",{key:s},[e("h3",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.description))]),t._v(" "),e("ol",t._l(a.list_top_games,(function(a,s){return e("li",{key:s},[void 0!==a.url&&""!==a.url?e("span",{on:{click:function(e){return t.modalFn(t.modalData=a.url,t.gameTitle=a.name)}}},[e("img",{staticClass:"lazy",attrs:{src:a.image,alt:"verajohn games"}}),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(a.name)+"\n\t\t\t\t\t\t\t\t")]):e("p",[e("img",{staticClass:"lazy",attrs:{src:a.image,alt:"verajohn games"}}),t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(a.name)+"\n\t\t\t\t\t\t\t\t")])])})),0)])})),0),t._v(" "),e("div",{staticClass:"row h-center"},[e("button",{staticClass:"btn-primary",attrs:{"data-test-id":"registration-button"}},[e("a",{attrs:{href:t.$page.frontmatter.our_games.cta_link}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$page.frontmatter.our_games.cta_text)+"\n\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"row h-center"},[e("small",{domProps:{innerHTML:t._s(t.$page.frontmatter.our_games.text_hyperlink)}})])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-payment"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("div",{staticClass:"txt-center",domProps:{innerHTML:t._s(t.$page.frontmatter.our_payment_methods.text_content)}}),t._v(" "),e("div",{attrs:{id:"payment-icons"}},t._l(t.$page.frontmatter.our_payment_methods.payment_method_icons,(function(t,a){return e("img",{key:a,staticClass:"lazy",attrs:{alt:"verajohn payment providers",src:t.image}})})),0)])])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-testimonials"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row txt-center"},[e("div",{staticClass:"testimonial-wrapper"},[e("h2",[t._v(" "+t._s(t.$page.frontmatter.first_customers_quote.title))]),t._v(" "),e("div",{staticClass:"profile-pic"},[e("img",{staticClass:"lazy",attrs:{src:t.$page.frontmatter.first_customers_quote.profile_image,alt:"verajohn profile"}})]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.$page.frontmatter.first_customers_quote.text_content)}})])])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-beginners-bonus"}},[e("div",{staticClass:"container no-container"},[e("div",{staticClass:"row column-2"},[e("div",[e("div",{staticClass:"bonus"},[e("div",{staticClass:"image-wrapper image-bg"},[e("img",{staticClass:"lazy",attrs:{src:t.$page.frontmatter.beginners_bonus.bg_image,alt:"beginners bonus"}})]),t._v(" "),e("div",{staticClass:"bonus-description",domProps:{innerHTML:t._s(t.$page.frontmatter.beginners_bonus.text_content)}})])]),t._v(" "),e("div",[e("div",{staticClass:"guide"},[e("iframe",{staticClass:"lazy",attrs:{title:"Verajohn YouTube video",width:"100%",height:"auto","data-src":t.$page.frontmatter.beginners_guide.video_url,loading:"lazy",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),t._v(" "),e("div",{staticClass:"bonus-description",domProps:{innerHTML:t._s(t.$page.frontmatter.beginners_guide.text_content)}})])])]),t._v(" "),e("div",{staticClass:"row h-center"},[e("button",{staticClass:"btn-primary",attrs:{"data-test-id":"registration-button"}},[e("a",{attrs:{href:t.$page.frontmatter.beginners_guide.cta_link}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$page.frontmatter.beginners_guide.cta_text)+"\n\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"row h-center"},[e("small",{domProps:{innerHTML:t._s(t.$page.frontmatter.beginners_guide.text_hyperlink)}})])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-customer-support"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{attrs:{id:"text-wrapper"}},[e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.customer_support.text_content)}})])])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-testimonials2"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row txt-center"},[e("div",{staticClass:"testimonial-wrapper"},[e("h2",[t._v(" "+t._s(t.$page.frontmatter.second_customers_quote.title))]),t._v(" "),e("div",{staticClass:"profile-pic"},[e("img",{staticClass:"lazy",attrs:{src:t.$page.frontmatter.second_customers_quote.profile_image,alt:"verajohn profile"}})]),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.$page.frontmatter.second_customers_quote.text_content)}})])])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-honourable-mentions"}},[e("div",{staticClass:"container no-container"},[e("div",{staticClass:"row txt-center"},[e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.honourable_mentions.text_content)}})]),t._v(" "),e("div",{staticClass:"row column-2 honourable-pods"},t._l(t.$page.frontmatter.honourable_mentions.list_of_tiles,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"box txt-center"},[e("div",{staticClass:"image-bg"},[e("img",{staticClass:"lazy",attrs:{src:a.bg_image,alt:"verajohn honourable"}})]),t._v(" "),e("div",{domProps:{innerHTML:t._s(a.text_content)}})])])})),0),t._v(" "),e("div",{staticClass:"row h-center"},[e("button",{staticClass:"btn-primary",attrs:{"data-test-id":"registration-button"}},[e("a",{attrs:{href:t.$page.frontmatter.honourable_mentions.cta_link}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$page.frontmatter.honourable_mentions.cta_text)+"\n\t\t\t\t\t\t")])])]),t._v(" "),e("div",{staticClass:"row h-center"},[e("small",{staticClass:"small",domProps:{innerHTML:t._s(t.$page.frontmatter.honourable_mentions.text_hyperlink)}})])])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-seo-contents"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("Content",{staticClass:"txt-center"})],1)])]),t._v(" "),e("section",{staticClass:"content-visibility",attrs:{id:"s-other-info"}},[e("div",{staticClass:"container no-container"},[e("div",[e("div",{domProps:{innerHTML:t._s(t.$page.frontmatter.other_info.title)}}),t._v(" "),e("ul",t._l(t.$page.frontmatter.other_info.list_text_links,(function(a,s){return e("li",{key:s},[e("a",{attrs:{href:a.text_url}},[t._v(t._s(a.text))])])})),0),t._v(" "),e("div",{staticClass:"footer-twitter-button-pure"},[e("a",{attrs:{href:t.$page.frontmatter.twitter_link}},[e("img",{staticClass:"lazy",attrs:{src:"/assets/verajohn/Vjfp/twitter.svg",alt:"twitter"}}),t._v(" "),e("span",[t._v(t._s(t.$page.frontmatter.twitter_title))])])])])])]),t._v(" "),e("footer",{staticClass:"content-visibility"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",[e("small",{staticClass:"d-block txt-center"},[t._v(t._s(t.$page.frontmatter.footer_text))])])]),t._v(" "),t._m(0)])])],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"row footer-icon"},[t("a",{staticClass:"lazy",attrs:{"aria-label":"CEG",target:"_blank",rel:"noopener",href:"https://verification.curacao-egaming.com/validateview.aspx?domain=verajohn.com"}},[t("img",{staticClass:"lazy curacao-regulator",attrs:{loading:"lazy",src:"https://verification.curacao-egaming.com/validate.ashx?domain=verajohn.com",alt:"curacao regulator"}})]),this._v(" "),t("img",{staticClass:"lazy",attrs:{src:"/assets/verajohn/Vjfp/20plus.png",alt:"20 plus"}})])}],!1,null,null,null);e.default=l.exports}}]);