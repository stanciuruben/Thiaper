///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// START HERO ANIMATIONS
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
var heroElements = document.getElementsByClassName('hero');

for (var i = 0; i < heroElements.length; i++) {
	var heroTL = gsap.timeline({ paused: true });
	heroTL
		.fromTo(
			heroElements[i].getElementsByClassName('hero__line')[0],
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
			heroElements[i].getElementsByClassName('hero__img')[0],
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
			heroElements[i].getElementsByClassName('hero__content')[0],
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
		trigger: heroElements[i],
		start: 'top 60%',
		id: 'hero-scroll-trigger',
		end: 'bottom bottom',
		animation: heroTL,
		toggleActions: 'play none none reverse'
	});
}

var heroFlatElements = document.getElementsByClassName('hero--flat');

for (var i = 0; i < heroFlatElements.length; i++) {
	var heroFlatTL = gsap.timeline({ paused: true });
	heroFlatTL
		.fromTo(
			heroFlatElements[i].getElementsByClassName('hero--flat__line')[0],
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
			heroFlatElements[i].getElementsByClassName('hero--flat__img')[0],
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
			heroFlatElements[i].getElementsByClassName(
				'hero--flat__content'
			)[0],
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
		trigger: heroFlatElements[i],
		start: 'top 60%',
		id: 'hero-flat-scroll-trigger',
		end: 'bottom bottom',
		animation: heroFlatTL,
		toggleActions: 'play none none reverse'
	});
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// END HERO ANIMATIONS
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// START TWO COLUMNS
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var twoColumnsElements = document.getElementsByClassName('two-columns');

for (var i = 0; i < twoColumnsElements.length; i++) {
	var twoColumnsTL = gsap.timeline({ paused: true });
	twoColumnsTL
		.fromTo(
			twoColumnsElements[i].getElementsByClassName(
				'two-columns__left'
			)[0],
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
			twoColumnsElements[i].getElementsByClassName(
				'two-columns__right'
			)[0],
			{
				x: '130%'
			},
			{
				x: 0,
				duration: 1,
				ease: 'strong.inOut'
			},
			'>-0.5'
		);

	ScrollTrigger.create({
		trigger: twoColumnsElements[i],
		start: 'top 60%',
		id: 'two-columns-scroll-trigger',
		end: 'bottom bottom',
		animation: twoColumnsTL,
		toggleActions: 'play none none reverse'
	});
}

var twoColumnsFlatElements =
	document.getElementsByClassName('two-columns--flat');

for (var i = 0; i < twoColumnsFlatElements.length; i++) {
	var twoColumnsFlatTL = gsap.timeline({ paused: true });
	twoColumnsFlatTL
		.fromTo(
			twoColumnsFlatElements[i].getElementsByClassName(
				'two-columns--flat__left'
			)[0],
			{
				y: '10%',
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1
			}
		)
		.fromTo(
			twoColumnsFlatElements[i].getElementsByClassName(
				'two-columns--flat__right'
			)[0],
			{
				y: '10%',
				opacity: 0
			},
			{
				y: 0,
				opacity: 1,
				duration: 1
			},
			'>-0.5'
		);

	ScrollTrigger.create({
		trigger: twoColumnsFlatElements[i],
		start: 'top 60%',
		id: 'two-columns-flat-scroll-trigger',
		end: 'bottom bottom',
		animation: twoColumnsFlatTL,
		toggleActions: 'play none none reverse'
	});
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// END TWO COLUMNS
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// START COLLECTIONS GRID
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var collectionsGridElements =
	document.getElementsByClassName('collections-grid');

for (var i = 0; i < collectionsGridElements.length; i++) {
	var items = collectionsGridElements[i].getElementsByClassName(
		'collections-grid__item'
	);

	var CGTL = gsap.timeline({ paused: true });

	CGTL.fromTo(
		collectionsGridElements[i].getElementsByClassName(
			'collections-grid__title'
		)[0],
		{
			y: '100%',
			opacity: 0
		},
		{
			y: '0',
			opacity: 1,
			duration: 0.5
		}
	);

	for (var j = 0; j < items.length; j++) {
		CGTL.fromTo(
			items[j],
			{
				y: '10%',
				opacity: 0
			},
			{
				y: '0',
				opacity: 1,
				duration: 0.4
			}
		);
	}

	ScrollTrigger.create({
		trigger: collectionsGridElements[i],
		start: 'top 60%',
		id: 'collections-grid-scroll-trigger',
		end: 'bottom bottom',
		animation: CGTL,
		toggleActions: 'play none none reverse'
	});
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// END COLLECTIONS GRID
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// START E-MAIL SUB
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

var eMailSubElements = document.getElementsByClassName('email-sub');

for (var i = 0; i < eMailSubElements.length; i++) {
	var eMailSubTL = gsap.timeline({ paused: true });
	eMailSubTL.fromTo(
		eMailSubElements[i],
		{
			y: '10%',
			opacity: 0
		},
		{
			y: 0,
			opacity: 1,
			duration: 1
		}
	);

	ScrollTrigger.create({
		trigger: eMailSubElements[i],
		start: 'top 60%',
		id: 'two-columns-flat-scroll-trigger',
		end: 'bottom bottom',
		animation: eMailSubTL,
		toggleActions: 'play none none reverse'
	});
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// END E-MAIL SUB
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
