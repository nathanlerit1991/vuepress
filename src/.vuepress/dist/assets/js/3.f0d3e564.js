(window.webpackJsonp=window.webpackJsonp||[]).push([[3,5,8,9,10,11,12,13,14,19],{236:function(t,e,a){},239:function(t,e,a){"use strict";a(236)},240:function(t,e,a){},241:function(t,e,a){},242:function(t,e,a){},243:function(t,e,a){},244:function(t,e,a){},245:function(t,e,a){},246:function(t,e,a){},248:function(t,e,a){"use strict";a.r(e);var i={name:"button-component",props:{btnText:{type:String,required:!0},btnLink:{type:String,required:!0},btnClassName:{type:String,required:!0}}},s=(a(239),a(13)),n=Object(s.a)(i,(function(){var t=this._self._c;return t("button",{class:this.btnClassName},[t("a",{attrs:{href:this.btnLink}},[this._v("\n    "+this._s(this.btnText)+"\n  ")])])}),[],!1,null,"af49a088",null);e.default=n.exports},251:function(t,e,a){"use strict";a(240)},252:function(t,e,a){"use strict";a(241)},253:function(t,e,a){"use strict";a(242)},254:function(t,e,a){"use strict";a(243)},255:function(t,e,a){"use strict";a(244)},256:function(t,e,a){"use strict";a(245)},257:function(t,e,a){"use strict";a(246)},266:function(t,e,a){},267:function(t,e,a){},276:function(t,e,a){"use strict";a.r(e);var i={props:{brand:{type:String,required:!0},logo:{type:String},title:{type:String},titleClassName:{type:String}}},s=a(13),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",[t.title?t._e():e("a",{attrs:{href:"intercasino"===t.brand?"https://intercasino.com/ja":"verajohn"===t.brand?"https://verajohn.com/ja":"https://yuugado.com/ja"}},[e("img",{staticClass:"logo",attrs:{src:t.logo,alt:t.brand+" logo"}})]),t._v(" "),t.title?e("h2",{class:t.titleClassName},[t._v(t._s(t.title))]):t._e()])}),[],!1,null,null,null);e.default=n.exports},277:function(t,e,a){"use strict";a.r(e);var i={name:"GameList",props:{gameData:{type:Object,required:!0},gameTitleClassName:{type:String,required:!0}}},s=(a(251),a(13)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"g-game-list o-hidden"},[e("div",{staticClass:"d-flex f-no-wrap"},[e("div",{staticClass:"h-left"},[e("p",{staticClass:"txt-highlight"},[t._v(t._s(t.gameData.game_icons_title))])]),t._v(" "),e("div",{staticClass:"h-right"},[e("a",{attrs:{href:t.gameData.all_games_redirect_url}},[e("p",{staticClass:"txt__primary1 txt--size1"},[t._v(t._s(t.gameData.all_games_title))])])])]),t._v(" "),e("div",{staticClass:"game-list d-flex o-scroll-y"},t._l(t.gameData.game_list,(function(a,i){return e("div",{key:i},[e("a",{staticClass:"left-icon",attrs:{href:a.url}},[e("i",{staticClass:"is-hot"}),t._v(" "),e("img",{staticClass:"m-auto",attrs:{width:"88",height:"88",src:a.image,alt:a.image}}),t._v(" "),e("p",{staticClass:"txt-ellipsis",class:t.gameTitleClassName},[t._v(t._s(a.title))])])])})),0)])}),[],!1,null,"931f78d2",null);e.default=n.exports},278:function(t,e,a){"use strict";a.r(e);var i={name:"FooterLinks",props:{brand:{type:String,required:!0},footerData:{type:Array,required:!0}}},s=(a(252),a(13)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",t._l(t.footerData,(function(a,i){return e("div",{key:i,staticClass:"g-footer-item"},[e("a",{staticClass:"v-center h-center",attrs:{href:`https://${t.brand}.com${a.link}`}},[e("img",{attrs:{src:a.image,alt:"footer link"}}),t._v(" "),e("span",{staticClass:"d-inline-block txt__primary1 txt--size2"},[t._v(t._s(a.text))])])])})),0)}),[],!1,null,"3a195e18",null);e.default=n.exports},279:function(t,e,a){"use strict";a.r(e);var i={mounted(){["H1","H2","H3","H4","H5","H6","P","A","LI"].forEach(t=>{if("H1"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="heading__primary1 heading--size1"}if("H2"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="heading__primary1 heading--size2"}if("H3"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="heading__primary1 heading--size3"}if("H4"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="heading__primary1 heading--size4"}if("H5"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="heading__primary1 heading--size5"}if("H6"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="heading__primary1 heading--size6"}if("P"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="txt__primary1 txt--size1"}if("LI"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="txt__primary1 txt--size1"}if("A"===t){let e=document.querySelectorAll(".g-seo-content "+t),a=null!==e?e.length:0,i=0;for(;i<a;i++)e[i].className+="txt-link"}})}},s=(a(253),a(13)),n=Object(s.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"g-seo-content"},[t("Content",{staticClass:"txt-center"})],1)}),[],!1,null,"3ac85008",null);e.default=n.exports},280:function(t,e,a){"use strict";a.r(e);var i={name:"PaymentProvider",props:{brand:{type:String,required:!0},paymentProviderImages:{type:Array,required:!1,default:()=>[""]},paymentTitle:{type:String,required:!0}}},s=(a(254),a(13)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"g-payment-provider"},[e("div",{staticClass:"d-flex"},[e("p",{staticClass:"txt__primary1 txt--size3"},[t._v(t._s(t.paymentTitle))])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",t._l(t.paymentProviderImages,(function(a,i){return e("img",{key:i,staticClass:"lazy",attrs:{src:`/assets/${t.brand}/${a.image}`,alt:"Provider",loading:"lazy"}})})),0)])])}),[],!1,null,"8460356c",null);e.default=n.exports},281:function(t,e,a){"use strict";a.r(e);var i={name:"game-provider",props:{brand:{type:String,required:!0},gameTitle:{type:String,required:!0},gameProviderImages:{type:Array,required:!1,default:()=>[""]}}},s=(a(255),a(13)),n=Object(s.a)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"g-game-providers"},[e("div",{staticClass:"d-flex"},[e("p",{staticClass:"txt__primary1 txt--size3"},[t._v(t._s(t.gameTitle))])]),t._v(" "),e("div",{staticClass:"d-flex"},[e("div",t._l(t.gameProviderImages,(function(a,i){return e("img",{key:i.image,staticClass:"lazy",attrs:{src:`/assets/${t.brand}/${a.image}`,alt:"Game Providers",loading:"lazy"}})})),0)])])}),[],!1,null,"ae96e290",null);e.default=n.exports},282:function(t,e,a){"use strict";a.r(e);var i={name:"license",props:{brand:{type:String,required:!0},regulatoryImages:{type:Array,required:!1,default:()=>[""]}}},s=(a(256),a(13)),n=Object(s.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"g-license"},[t("div",{staticClass:"d-flex"},[t("div",{staticClass:"license-icon"},[t("a",{attrs:{"aria-label":"CEG",target:"_blank",rel:"noopener",href:`https://verification.curacao-egaming.com/validateview.aspx?domain=${this.brand}.com`}},[t("img",{staticClass:"lazy",attrs:{loading:"lazy",src:`https://verification.curacao-egaming.com/validate.ashx?domain=${this.brand}.com`,alt:"alt img"}})]),this._v(" "),this._l(this.regulatoryImages,(function(e,a){return t("img",{key:a,staticClass:"lazy",attrs:{src:e.image,alt:"License",loading:"lazy"}})}))],2),this._v(" "),this._m(0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"license-text"},[t("span",{staticClass:"txt__primary3 txt--size3"},[this._v("当ウェブサイトの運営は、Breckenridge Curacao B.V.（登録住所: 36 Julianaplein, Willemstad, Curaçao）です。"),t("br"),this._v("\n        Breckenridge Curaçao B.V.はキュラソー州知事により発行されたMaster Gaming License #1668/JAZに基づくCEG Curaçao Egaming により付与されたサブライセンスを通して、正式に認可されています。")])])}],!1,null,"1434827e",null);e.default=n.exports},283:function(t,e,a){"use strict";a.r(e);var i=a(248),s={name:"FooterSticky",props:{brand:{type:String,required:!0},signInData:{type:Object,required:!0},joinData:{type:Object,required:!0}},components:{Button:i.default}},n=(a(257),a(13)),r=Object(n.a)(s,(function(){var t=this._self._c;return t("aside",{staticClass:"g-footer-sticky"},[t("Button",{attrs:{"btn-text":this.signInData.label,"btn-link":`https://${this.brand}.com${this.signInData.link}`,"btn-class-name":"btn-secondary"}}),this._v(" "),t("Button",{attrs:{"btn-text":this.joinData.label,"btn-link":`https://${this.brand}.com${this.joinData.link}`,"btn-class-name":"btn-primary"}})],1)}),[],!1,null,"e882bfb8",null);e.default=r.exports},287:function(t,e,a){"use strict";a(266)},288:function(t,e,a){"use strict";a(267)},315:function(t,e,a){"use strict";a.r(e);var i=a(248),s=a(276),n=a(277),r=a(278),l=a(279),o=a(280),c=a(281),d=a(282),u=a(283),g={components:{Button:i.default,NavMainTitleLogo:s.default,Games:n.default,FooterLinks:r.default,SEOContent:l.default,PaymentProvider:o.default,GameProvider:c.default,License:d.default,FooterSticky:u.default},data:()=>({footerData:[{text:"ヘルプ・センター",link:"/ja/help",image:"/assets/verajohn/LobbyPages/help-icon.png"},{text:"ビギナーズガイド",link:"/ja/about/beginnersguidemb",image:"/assets/verajohn/LobbyPages/beginner-guide-icon.png"}],paymentProvider:[{image:"LobbyPages/payment-provider/1-master-icon.png"},{image:"LobbyPages/payment-provider/2-venus-point.png"},{image:"LobbyPages/payment-provider/3-bitcoin-icon.png"},{image:"LobbyPages/payment-provider/4-playsafe-icon.png"},{image:"LobbyPages/payment-provider/5-eco-icon.png"},{image:"LobbyPages/payment-provider/6-i-wallet-icon.png"}],gameProvider:[{image:"LobbyPages/game-provider/1-e-icon.png"}],license:[{image:"/assets/verajohn/LobbyPages/license/20+.svg"}],signInBtnData:{label:"ログイン",link:"/ja/#signin"},joinBtnData:{label:"今すぐ登録しよう",link:"/ja/#join"}}),computed:{brandName(){return this.$page.path.includes("verajohn")?"verajohn":this.$page.path.includes("intercasino")?"intercasino":"yuugado"}}},m=(a(287),a(288),a(13)),p=Object(m.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"lobby"},[e("header",[e("nav",{attrs:{id:"s-nav-bar-main"}},[e("div",{staticClass:"h-left",attrs:{id:"nav-home"}},[e("a",{attrs:{href:`https://${t.brandName}.com/ja`}},[e("img",{attrs:{src:`/assets/${t.brandName}/LobbyPages/home-icon.png`,alt:"Home icon"}})])]),t._v(" "),e("div",{staticClass:"h-center"},[e("NavMainTitleLogo",{attrs:{brand:t.brandName,logo:`/assets/${t.brandName}/LobbyPages/logo.png`,title:"","title-class-name":"heading__primary1 heading--size1"}})],1),t._v(" "),e("div",{staticClass:"h-right"},[e("Button",{attrs:{"btn-text":"ログイン","btn-link":`https://${t.brandName}.com/ja/#signin`,"btn-class-name":"btn-secondary txt--size3"}})],1)])]),t._v(" "),e("main",[e("section",{attrs:{id:"s-games"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("Games",{attrs:{gameData:t.$page.frontmatter.game,gameTitleClassName:"txt__primary1 txt--size1"}})],1)])]),t._v(" "),e("section",{attrs:{id:"s-cta"}},[e("img",{staticClass:"cta-logo d-block",attrs:{src:`/assets/${t.brandName}/LobbyPages/cta.png`,alt:t.brandName+" Logo"}}),t._v(" "),e("FooterLinks",{attrs:{brand:t.brandName,"footer-data":t.footerData}})],1),t._v(" "),e("section",{attrs:{id:"s-seo-contents"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("SEOContent")],1)])]),t._v(" "),e("footer",{attrs:{id:"s-footer-icon-wrapper"}},[e("div",{staticClass:"container footer-icons o-hidden"},[e("PaymentProvider",{attrs:{brand:t.brandName,"payment-title":"入出金方法","payment-provider-images":t.paymentProvider}}),t._v(" "),e("GameProvider",{attrs:{brand:t.brandName,"game-title":"ゲーム配信会社","game-provider-images":t.gameProvider}}),t._v(" "),e("License",{attrs:{brand:t.brandName,"regulatory-images":t.license}})],1)])]),t._v(" "),e("FooterSticky",{attrs:{brand:t.brandName,"sign-in-data":t.signInBtnData,"join-data":t.joinBtnData}})],1)}),[],!1,null,null,null);e.default=p.exports}}]);