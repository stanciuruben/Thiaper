// Brands Initialized
var slidesPerView = 4;

new Swiper('#swiper-1', {
	slidesPerView: slidesPerView,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	navigation: {
		nextEl: '#swiper-button-next-1',
		prevEl: '#swiper-button-prev-1'
	}
});
new Swiper('#swiper-2', {
	slidesPerView: slidesPerView,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	navigation: {
		nextEl: '#swiper-button-next-2',
		prevEl: '#swiper-button-prev-2'
	}
});
