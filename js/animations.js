var heroElements = document.getElementsByClassName("hero");

for (var i = 0; i < heroElements.length; i++) {
	var heroTL = gsap.timeline({ paused: true });
	heroTL
		.fromTo(
			heroElements[i].getElementsByClassName("hero__line")[0],
			{
				width: "0"
			},
			{
				width: "80%",
				duration: 1,
				ease: "strong.inOut"
			}
		)
		.fromTo(
			heroElements[i].getElementsByClassName("hero__img")[0],
			{
				width: "0"
			},
			{
				width: "90%",
				duration: 1,
				ease: "strong.inOut"
			},
			">-1"
		)
		.fromTo(
			heroElements[i].getElementsByClassName("hero__content")[0],
			{
				height: "0"
			},
			{
				height: "auto",
				duration: 1,
				ease: "strong.inOut"
			}
		);

	ScrollTrigger.create({
		trigger: heroElements[i],
		start: "top 60%",
		id: "hero-scroll-trigger",
		end: "bottom bottom",
		animation: heroTL,
		toggleActions: "play none none reverse"
	});
}
