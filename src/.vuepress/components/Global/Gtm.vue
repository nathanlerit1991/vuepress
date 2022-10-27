<template>
  <iframe loading="lazy" src="https://www.googletagmanager.com/ns.html?id=GTM-KCLSQC8" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</template>
<script>
export default {
	mounted () {
		// let head = document.head
		// let gtmHead = document.getElementsByTagName("head")[0]
		// let script = document.createElement('script')
		// script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-KCLSQC8'
		// gtmHead.insertBefore(script, gtmHead.firstChild)


    let gtmHead = document.getElementsByTagName("head")[0]
    let script = document.createElement('script')
    script.innerHTML = function handleScriptLoaded() {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KCLSQC8');
    }
    gtmHead.insertBefore(script, gtmHead.firstChild)
	}
}
</script>
