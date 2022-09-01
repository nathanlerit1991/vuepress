if (typeof window !== 'undefined') {
	window.onload = function() {
		//Check all img dimension then add the approriate dimension
		let imgDimension = document.querySelectorAll('img')
		imgDimension.forEach((img, i) => {
			let imgWidth = img.width
			let imgHeight = img.height

			img.setAttribute('width', imgWidth)
			img.setAttribute('height', imgHeight)
		})

		//Replace all src to data-src onload
		let removeSrc = document.querySelectorAll('img.lazy')
		for (const remove of removeSrc) {
			remove.setAttribute('data-src', remove.src)
			remove.src = ""
		}

		//Replace all image and iframes data-src to src
		function deferAssets() {
			let imgElem = document.querySelectorAll('img.lazy')
			let iframeElem = document.querySelectorAll('iframe.lazy')
			for ( let i = 0; i < imgElem.length; i++ ) {
				if(imgElem[i].getAttribute('data-src')) {
					imgElem[i].setAttribute('src',imgElem[i].getAttribute('data-src'))
					imgElem[i].removeAttribute('data-src')
				}
			}
			for ( let i = 0; i < iframeElem.length; i++ ) {
				if(iframeElem[i].getAttribute('data-src')) {
					iframeElem[i].setAttribute('src',iframeElem[i].getAttribute('data-src'))
					iframeElem[i].removeAttribute('data-src')
				}
			}
		}

		let lazyLoadTrigger = false
		document.addEventListener("scroll", () => {
			let scrolled = document.scrollingElement.scrollTop
			if(scrolled > screen.height / 3 && lazyLoadTrigger === false){
				// deferAssets()
				// console.log('xxx', scrolled)
			}
		})
		// let lazyLoadTrigger = false
		// document.addEventListener("scroll", () => {
		//   let scrolled = document.scrollingElement.scrollTop;
		//   if(scrolled > screen.height / 3 && lazyLoadTrigger === false){
		// 		deferAssets()
		// 		lazyLoadTrigger = true
		//   }
		// }, { passive: true })
	}
}
