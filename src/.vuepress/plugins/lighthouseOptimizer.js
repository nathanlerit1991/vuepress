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
			let lazyElem = document.querySelectorAll('.lazy')
			for ( let i = 0; i < lazyElem.length; i++ ) {
				if(lazyElem[i].getAttribute('data-src')) {
					lazyElem[i].setAttribute('src',lazyElem[i].getAttribute('data-src'))
					lazyElem[i].removeAttribute('data-src')
				}
			}
		}

		//Trigger deferAssets() when scroll - function will trigger once
		let lazyLoadTrigger = false
		document.addEventListener("scroll", () => {
		  let scrolled = document.scrollingElement.scrollTop;
		  if(scrolled > screen.height / 3 && lazyLoadTrigger === false){
				deferAssets()
				lazyLoadTrigger = true
		  }
		})


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
