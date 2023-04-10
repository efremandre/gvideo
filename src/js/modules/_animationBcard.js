'use strict';
export function animationBcard() {
	document.addEventListener('DOMContentLoaded', () => {
		let bcardAnimation = document.querySelectorAll('.bcard-animation');

		bcardAnimation.forEach(el => {
			el.classList.add('element-show');
		})
	})
}