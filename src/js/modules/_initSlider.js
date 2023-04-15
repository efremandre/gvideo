'use strict';
import Swiper, {Navigation, Pagination, Autoplay, FreeMode, Keyboard, Lazy} from 'swiper';
export function initSlider() {
	const port = new Swiper('.mySwiper', {
		modules:[Navigation, Pagination, Autoplay, FreeMode, Keyboard, Lazy],
		lazy: true,
		loop: true,
		speed: 1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
		autoplay: {
			delay: 10000,
		},
		keyboard: {
			enabled: true,
		},
		breakpoints: {
			319: {
				slidesPerView: 1,
			},
			569: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			989: {
				slidesPerView: 3,
				spaceBetween: 30,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			},
		},
	});
}