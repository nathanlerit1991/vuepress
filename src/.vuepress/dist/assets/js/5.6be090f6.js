(window.webpackJsonp=window.webpackJsonp||[]).push([[5,8],{236:function(t,n,e){},239:function(t,n,e){"use strict";e(236)},246:function(t,n,e){},248:function(t,n,e){"use strict";e.r(n);var s={name:"button-component",props:{btnText:{type:String,required:!0},btnLink:{type:String,required:!0},btnClassName:{type:String,required:!0}}},i=(e(239),e(13)),a=Object(i.a)(s,(function(){var t=this._self._c;return t("button",{class:this.btnClassName},[t("a",{attrs:{href:this.btnLink}},[this._v("\n    "+this._s(this.btnText)+"\n  ")])])}),[],!1,null,"af49a088",null);n.default=a.exports},257:function(t,n,e){"use strict";e(246)},283:function(t,n,e){"use strict";e.r(n);var s=e(248),i={name:"FooterSticky",props:{brand:{type:String,required:!0},signInData:{type:Object,required:!0},joinData:{type:Object,required:!0}},components:{Button:s.default}},a=(e(257),e(13)),r=Object(a.a)(i,(function(){var t=this._self._c;return t("aside",{staticClass:"g-footer-sticky"},[t("Button",{attrs:{"btn-text":this.signInData.label,"btn-link":`https://${this.brand}.com${this.signInData.link}`,"btn-class-name":"btn-secondary"}}),this._v(" "),t("Button",{attrs:{"btn-text":this.joinData.label,"btn-link":`https://${this.brand}.com${this.joinData.link}`,"btn-class-name":"btn-primary"}})],1)}),[],!1,null,"e882bfb8",null);n.default=r.exports}}]);