<template>
  <iframe loading="lazy" src="https://www.googletagmanager.com/ns.html?id=OPT-K6FTGKG" height="0" width="0" style="display:none;visibility:hidden"></iframe>
</template>
<script>
export default {
	mounted () {
    //GTM
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

    //GO
		let head = document.head
		let goHead = document.getElementsByTagName("head")[0]
		let goScript = document.createElement('script')
		goScript.src = 'https://www.googleoptimize.com/optimize.js?id=OPT-K6FTGKG'
		goHead.insertBefore(goScript, goHead.firstChild)

    //GA
    let gaHead = document.getElementsByTagName("head")[0]
    let gaHead2 = document.getElementsByTagName("head")[0]

    let gaScript2 = document.createElement('script')
		gaScript2.src = 'https://www.googletagmanager.com/gtag/js?id=G-V3G0MHZQV3'
		gaHead2.insertBefore(gaScript2, gaHead2.firstChild)

    let gaScript = document.createElement('script')
    gaScript.innerHTML = function handleScriptLoaded() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-V3G0MHZQV3');
    }
    gaHead.insertBefore(gaScript, gaHead.firstChild)
	}
}
</script>
