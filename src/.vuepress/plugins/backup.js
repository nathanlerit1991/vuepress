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
					imgElem[i].setAttribute('src',imgElem[i].getAttribute('data-src'));
				}
			}
			for ( let i = 0; i < iframeElem.length; i++ ) {
				if(iframeElem[i].getAttribute('data-src')) {
					iframeElem[i].setAttribute('src',iframeElem[i].getAttribute('data-src'));
				}
			}
		}

		// //Check if element is visible using classname 'lazy'
		// function isInViewport() {
		// 	let el = document.querySelector('img.lazy')
		// 	const rect = el.getBoundingClientRect()
		// 	return (
		// 		rect.top >= 0 &&
		// 		rect.left >= 0 &&
		// 		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		// 	)
		// }
		//
		// //Trigger deferAssets function once element is visible in the screen
		// if (typeof window !== 'undefined') {
		// 	window.addEventListener('scroll', function () {
		// 		if (isInViewport()) {
		// 			let elementVisible = document.querySelectorAll('img.lazy')
		// 			for (const visible of elementVisible) {
		// 				deferAssets()
		// 			}
		// 		}
		// 	})
		// }


		let lazyLoadTrigger = false
		// const aboveTheFold = document.getElementById("s-welcome");
		document.addEventListener("scroll", (e) => {
		  let scrolled = document.scrollingElement.scrollTop;
		  // var position = content.offsetTop;
		  if(scrolled > screen.height / 3 && lazyLoadTrigger === false){
		   	deferAssets()
		  }
		}, true)



		//Random Javascript
		// https://www.webpagetest.org/result/220903_BiDcPV_567/
		// function randomFn() {
		// 	for (let i = 0; i < 10; i++) {
		//
		// 		let headerOne = document.querySelectorAll('h1')
		// 		for ( let headerOnei = 0; headerOnei < headerOne.length; headerOnei++ ) {
		// 			headerOne[headerOnei].classList.add("sampleH1Class")
		// 		}
		//
		// 		let headerTwo = document.querySelectorAll('h2')
		// 		for ( let headerTwoi = 0;headerTwoi < headerTwo.length;headerTwoi++ ) {
		// 			headerTwo[headerTwoi].classList.add("sampleH2Class")
		// 		}
		//
		// 		let headerThree = document.querySelectorAll('h3')
		// 		for ( let headerThreei = 0; headerThreei < headerThree.length; headerThreei++ ) {
		// 			headerThree[headerThreei].classList.add("sampleH3Class")
		// 		}
		//
		// 		let parag = document.querySelectorAll('p')
		// 		for ( let paragi = 0; paragi < parag.length; paragi++ ) {
		// 			parag[paragi].classList.add("sampleParagraphClass")
		// 		}
		//
		// 		console.log('loop counter', i)
		// 	}
		// }
		// randomFn()
	}
}
