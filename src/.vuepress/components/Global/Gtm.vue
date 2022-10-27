<template>
  <iframe loading="lazy" src="https://www.googletagmanager.com/ns.html?id=OPT-K6FTGKG" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</template>
<script>
export default {
	mounted () {
		let head = document.head
		let goHead = document.getElementsByTagName("head")[0]
		let goScript = document.createElement('script')
		goScript.src = 'https://www.googleoptimize.com/optimize.js?id=OPT-K6FTGKG'
		goHead.insertBefore(goScript, goHead.firstChild)


    let gtmHead = document.getElementsByTagName("head")[0]
    let gtmScript = document.createElement('script')
    gtmScript.innerHTML = function handleScriptLoaded() {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','OPT-K6FTGKG');
    }
    gtmHead.insertBefore(gtmScript, gtmHead.firstChild)
	}
}
</script>
