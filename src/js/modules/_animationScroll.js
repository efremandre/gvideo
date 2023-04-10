'use strict';
export function animationScroll() {
	const onEntry = (entry) => {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('element-show');
			}
		});
	}

	let options = {
		threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let indexAnimation = document.querySelectorAll('.animation');
	// let bcardAnimation = document.querySelectorAll('.bcard-animation');

	for (let elm of indexAnimation) {
		observer.observe(elm);
	}

	// for (let elm of bcardAnimation) {
	// 	observer.observe(elm);
	// }
}