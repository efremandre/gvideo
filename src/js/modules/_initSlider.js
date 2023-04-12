'use strict';
import Swiper, {Navigation, Pagination, Autoplay, FreeMode, Keyboard} from 'swiper';
export function initSlider() {
	const port = new Swiper('.mySwiper', {
		modules:[Navigation, Pagination, Autoplay, FreeMode, Keyboard],
		loop: true,
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		autoplay: {
			delay: 10000,
		},
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			569: {
				slidesPerView: 3,
				spaceBetween: 30
			},
		},
	});
}