if (typeof window !== 'undefined') {
	window.onload = function() {
		// //GTM fix
		// let gtmImg = document.querySelectorAll('#gtmContainerTags img')
		// for (const remove of gtmImg) {
		// 	remove.setAttribute('data-src', remove.src)
		// 	remove.src = ""
		// 	remove.classList.add('content-visibility')
		// }

		// let gtmIframe = document.querySelectorAll('#gtmContainerTags iframe')
		// for (const remove of gtmIframe) {
		// 	remove.setAttribute('data-src', remove.src)
		// 	remove.src = ""
		// 	remove.loading = "lazy"
		// 	remove.classList.add('content-visibility')
		// }

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
			let lazyElem = document.querySelectorAll('.lazy')
			for ( let i = 0; i < lazyElem.length; i++ ) {
				if(lazyElem[i].getAttribute('data-src')) {
					lazyElem[i].setAttribute('src',lazyElem[i].getAttribute('data-src'))
					lazyElem[i].removeAttribute('data-src')
				}
			}
		}

		//Trigger deferAssets() when scroll - function will trigger once
		// let lazyLoadTrigger = false
		// document.addEventListener("scroll", () => {
		//   let scrolled = document.scrollingElement.scrollTop;
		//   if(scrolled > screen.height / 3 && lazyLoadTrigger === false){
		// 		deferAssets()
		// 		lazyLoadTrigger = true
		//   }
		// })


		function isInViewport() {
			let el = document.querySelector('.lazy')
			const rect = el.getBoundingClientRect()
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)
			)
		}

		//Trigger deferAssets() when scroll - function will trigger once
		let lazyLoadTrigger = false
		window.addEventListener('scroll', function () {
			if (isInViewport() && lazyLoadTrigger === false) {
				let elementVisible = document.querySelectorAll('.lazy')
				for (const visible of elementVisible) {
					deferAssets()
					lazyLoadTrigger = true
				}
			}
		})

		//FOR LARGER RESOLUTION SCREEN: Trigger deferAssets if element is already visible using classname 'lazy'
		if (isInViewport()) {
			let elementVisible = document.querySelectorAll('.lazy')
			for (const visible of elementVisible) {
				deferAssets()
			}
		}
	}
}
