var tl = gsap.timeline();

tl.fromTo(
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
