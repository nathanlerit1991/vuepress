(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{251:function(e,t,n){"use strict";n.r(t);var a={mounted(){let e=document.head,t=document.createElement("link");t.rel="shortcut icon",t.href="/assets/verajohn/vj_favicon.ico",e.appendChild(t);(async e=>await this.$page.frontmatter.seo)().then(t=>{Object.keys(t).forEach(n=>{let a=document.createElement("meta");"robots"===n&&t[n].length<=0&&(t[n]="noindex",this.$page.frontmatter.title&&this.$page.frontmatter.description?t[n]="index,follow":t[n]="noindex"),"robots"===n&&(a.name=n,a.content=t[n],e.appendChild(a)),"keywords"===n&&(a.name=n,a.content=t[n],e.appendChild(a)),"alternate_links"===n&&t[n].forEach(t=>{let n=document.createElement("link");n.rel="alternate",n.href=t.href,n.hreflang=t.language,e.appendChild(n)})})})}},o=n(13),l=Object(o.a)(a,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);t.default=l.exports}}]);