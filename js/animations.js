var heroTL = gsap.timeline({ paused: true });

heroTL
	.fromTo(
		'.hero__line',
		{
			width: '0'
		},
		{
			width: '80%',
			duration: 1,
			ease: 'strong.inOut'
		}
	)
	.fromTo(
		'.hero__img',
		{
			width: '0'
		},
		{
			width: '90%',
			duration: 1,
			ease: 'strong.inOut'
		},
		'>-1'
	)
	.fromTo(
		'.hero__content',
		{
			height: '0'
		},
		{
			height: 'auto',
			duration: 1,
			ease: 'strong.inOut'
		}
	);

var twoColumnsTL = gsap.timeline({ paused: true });

twoColumnsTL
	.fromTo(
		'.two-columns__left',
		{
			x: '-130%'
		},
		{
			x: 0,
			duration: 1,
			ease: 'strong.inOut'
		}
	)
	.fromTo(
		'.two-columns__right',
		{
			x: '130%'
		},
		{
			x: 0,
			duration: 1,
			ease: 'strong.inOut'
		},
		'>-0.5'
	)
	.fromTo(
		'.two-columns__left__content',
		{
			height: '0'
		},
		{
			height: 'auto',
			duration: 1,
			ease: 'strong.inOut'
		},
		'>-0.5'
	)
	.fromTo(
		'.two-columns__right__content',
		{
			height: '0'
		},
		{
			height: 'auto',
			duration: 1,
			ease: 'strong.inOut'
		},
		'>-0.5'
	);

ScrollTrigger.create({
	trigger: '.two-columns',
	start: 'top 60%',
	id: 'two-columns-scroll-trigger',
	end: 'bottom bottom',
	animation: twoColumnsTL,
	toggleActions: 'play none none forward'
});

window.addEventListener('load', function () {
	heroTL.play();
});
