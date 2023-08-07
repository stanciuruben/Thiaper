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

ScrollTrigger.create({
	trigger: '.hero',
	start: 'top 60%',
	id: 'hero-scroll-trigger',
	end: 'bottom bottom',
	animation: heroTL,
	toggleActions: 'play none none forward'
});

var heroFlatTL = gsap.timeline({ paused: true });
heroFlatTL
	.fromTo(
		'.hero--flat__line',
		{
			width: '0'
		},
		{
			width: '100%',
			duration: 1,
			ease: 'strong.inOut'
		}
	)
	.fromTo(
		'.hero--flat__img',
		{
			width: '0'
		},
		{
			width: '100%',
			duration: 1,
			ease: 'strong.inOut'
		},
		'>-1'
	)
	.fromTo(
		'.hero--flat__content',
		{
			height: '0'
		},
		{
			height: 'auto',
			duration: 1,
			ease: 'strong.inOut'
		}
	);

ScrollTrigger.create({
	trigger: '.hero--flat',
	start: 'top 60%',
	id: 'hero-flat-scroll-trigger',
	end: 'bottom bottom',
	animation: heroFlatTL,
	toggleActions: 'play none none forward'
});

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
		'>-1'
	);

ScrollTrigger.create({
	trigger: '.two-columns',
	start: 'top 60%',
	id: 'two-columns-scroll-trigger',
	end: 'bottom bottom',
	animation: twoColumnsTL,
	toggleActions: 'play none none forward'
});

var twoColumnsFlatTL = gsap.timeline({ paused: true });
twoColumnsFlatTL
	.fromTo(
		'.two-columns--flat__left',
		{
			y: '10%',
			opacity: 0
		},
		{
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'strong.inOut'
		}
	)
	.fromTo(
		'.two-columns--flat__right',
		{
			y: '10%',
			opacity: 0
		},
		{
			y: 0,
			opacity: 1,
			duration: 1,
			ease: 'strong.inOut'
		},
		'>-1'
	);

ScrollTrigger.create({
	trigger: '.two-columns--flat',
	start: 'top 60%',
	id: 'two-columns-flat-scroll-trigger',
	end: 'bottom bottom',
	animation: twoColumnsFlatTL,
	toggleActions: 'play none none forward'
});
