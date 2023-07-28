var tl = gsap.timeline();

gsap.fromTo(
	'.slide-form-left',
	{
		x: '-100%'
	},
	{
		x: 0,
		duration: 1
	}
);

gsap.fromTo(
	'.slide-form-right',
	{
		x: '100%'
	},
	{
		x: 0,
		duration: 1
	}
);

// Navbar
var navLinkListContainer = document.getElementById('nav__link-list-container');
var navLinkListOpener = document.getElementById('nav__link-list-opener');
var navLinkListCloser = document.getElementById('nav__link-list-closer');

navLinkListOpener.addEventListener('click', function () {
	navLinkListContainer.style.display = 'block';
	setTimeout(function () {
		navLinkListContainer.style.transform = 'translateX(0)';
		navLinkListOpener.setAttribute('aria-expanded', 'true');
		navLinkListCloser.setAttribute('aria-expanded', 'true');
	}, 0);
});

navLinkListCloser.addEventListener('click', function () {
	navLinkListContainer.style.transform = 'translateX(-100%)';
	navLinkListOpener.setAttribute('aria-expanded', 'false');
	navLinkListCloser.setAttribute('aria-expanded', 'false');
	setTimeout(function () {
		navLinkListContainer.style.display = 'none';
	}, 400);
});

window.addEventListener('resize', function () {
	if (window.innerWidth > 900) {
		navLinkListContainer.style.display = 'block';
		navLinkListContainer.style.transform = 'translateX(0)';
		navLinkListOpener.setAttribute('aria-expanded', 'false');
		navLinkListCloser.setAttribute('aria-expanded', 'false');
	} else {
		navLinkListContainer.style.transform = 'translateX(-100%)';
		navLinkListOpener.setAttribute('aria-expanded', 'false');
		navLinkListCloser.setAttribute('aria-expanded', 'false');
		setTimeout(function () {
			navLinkListContainer.style.display = 'none';
		}, 400);
	}
});
