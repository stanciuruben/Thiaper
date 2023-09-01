// Brands Initialized
var brandsSlidesPerView = 4;

new Swiper('#swiper-1', {
	slidesPerView: brandsSlidesPerView,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	navigation: {
		nextEl: '#swiper-button-next-1',
		prevEl: '#swiper-button-prev-1'
	}
});
new Swiper('#swiper-2', {
	slidesPerView: brandsSlidesPerView,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	navigation: {
		nextEl: '#swiper-button-next-2',
		prevEl: '#swiper-button-prev-2'
	}
});

// Featured Products Initialized

new Swiper('#fi__swiper', {
	slidesPerView: 1.1,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	slidesOffsetBefore: 0,
	slidesOffsetAfter: 0,
	navigation: {
		nextEl: '#fi__swiper-button-next',
		prevEl: '#fi__swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination'
	},
	breakpoints: {
		600: {
			slidesPerView: 1.7,
			slidesOffsetBefore: 50,
			slidesOffsetAfter: 50
		},
		900: {
			slidesPerView: 2.8,
			slidesOffsetBefore: 50,
			slidesOffsetAfter: 50
		}
	}
});
