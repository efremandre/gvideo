'use strict';
export function animationScroll() {
	const onEntry = (entry) => {
		entry.forEach(change => {
			if (change.isIntersecting) {
				change.target.classList.add('element-show');
			}
		});
	}

	let options = { threshold: [0.5] };
	let observer = new IntersectionObserver(onEntry, options);
	let animationBtn = document.querySelectorAll('.buttons-animation');
	let animation = document.querySelectorAll('.animation');
	let animationTitle = document.querySelectorAll('.animationTitle');
	let animationTop = document.querySelectorAll('.animationTop');
	let animationBottom = document.querySelectorAll('.animationBottom');
	let animationLeft = document.querySelectorAll('.animationLeft');
	let animationRight = document.querySelectorAll('.animationRight');

	for (let elm of animationBtn) {
		observer.observe(elm);
	}

	for (let elm of animation) {
		observer.observe(elm);
	}

	for (let elm of animationTitle) {
		observer.observe(elm);
	}

	for (let elm of animationTop) {
		observer.observe(elm);
	}

	for (let elm of animationBottom) {
		observer.observe(elm);
	}

	for (let elm of animationLeft) {
		observer.observe(elm);
	}

	for (let elm of animationRight) {
		observer.observe(elm);
	}
}