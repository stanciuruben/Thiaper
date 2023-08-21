// Mobile Menu
var navLinkListOpeners = document.getElementsByClassName(
	'nav__link-list-opener'
);
var navLinkListClosers = document.getElementsByClassName(
	'nav__link-list-closer'
);

function toggleMobileMenu(navLinkListOpener, navLinkListCloser) {
	if (
		navLinkListOpener.getAttribute('aria-expanded') === 'true' &&
		navLinkListCloser.getAttribute('aria-expanded') === 'true'
	) {
		navLinkListOpener.setAttribute('aria-expanded', 'false');
		navLinkListCloser.setAttribute('aria-expanded', 'false');
		return;
	}
	navLinkListOpener.setAttribute('aria-expanded', 'true');
	navLinkListCloser.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu(navLinkListCloser, navLinkListOpener) {
	navLinkListOpener.setAttribute('aria-expanded', 'false');
	navLinkListCloser.setAttribute('aria-expanded', 'false');
}

for (var i = 0; i < navLinkListOpeners.length; i++) {
	var currentOpener = navLinkListOpeners[i];
	var linkListContainer = currentOpener.nextElementSibling;
	currentOpener.addEventListener(
		'click',
		toggleMobileMenu.bind(
			this,
			currentOpener,
			linkListContainer.getElementsByClassName('nav__link-list-closer')[0]
		)
	);
}

for (var i = 0; i < navLinkListClosers.length; i++) {
	var currentCloser = navLinkListClosers[i];
	var linkListContainer = currentCloser.parentElement;
	var main = linkListContainer.parentElement;
	currentCloser.addEventListener(
		'click',
		closeMobileMenu.bind(
			this,
			currentCloser,
			main.getElementsByClassName('nav__link-list-opener')[0]
		)
	);
}

var navMains = document.querySelectorAll('.nav-fixed .nav-main');
var navAnnouncements = document.querySelectorAll(
	'.nav-fixed .nav-announcement'
);

window.addEventListener('scroll', function () {
	if (window.scrollY > 300) {
		for (var i = 0; i < navMains.length; i++) {
			navMains[i].style.padding = '1rem 1.5rem';
		}
		for (var i = 0; i < navAnnouncements.length; i++) {
			navAnnouncements[i].style.height = 0;
			navAnnouncements[i].style.padding = 0;
		}
	} else {
		for (var i = 0; i < navMains.length; i++) {
			navMains[i].style.padding = '1.5rem';
		}
		for (var i = 0; i < navAnnouncements.length; i++) {
			navAnnouncements[i].style.height = 'auto';
			navAnnouncements[i].style.padding = '1rem';
		}
	}
});

// Collections
function showCollectionNavigation(link) {
	if (
		window.innerWidth <= 900 ||
		link.getAttribute('aria-expanded') === null ||
		link.getAttribute('aria-expanded') === 'true'
	) {
		return;
	}

	link.setAttribute('aria-expanded', 'true');
}

function hideCollectionNavigation(link, parentElement) {
	if (
		parentElement.matches(':hover') ||
		link.getAttribute('aria-expanded') === null
	)
		return;
	link.setAttribute('aria-expanded', 'false');
}

var collectionLinks = document.getElementsByClassName('nav-collections__link');

for (var i = 0; i < collectionLinks.length; i++) {
	var currentLink = collectionLinks[i];
	currentLink.addEventListener(
		'mouseover',
		showCollectionNavigation.bind(this, currentLink)
	);
	currentLink.parentElement.addEventListener(
		'mouseout',
		hideCollectionNavigation.bind(
			this,
			currentLink,
			currentLink.parentElement
		)
	);
}

var collectionLinksContainers = document.getElementsByClassName(
	'nav-collections__links'
);
var isCollectionLinksInMobileMenu = false;

function displayCollectionLinksInMobileMenu() {
	if (isCollectionLinksInMobileMenu) return;
	for (var i = 0; i < collectionLinksContainers.length; i++) {
		var currentCollectionLinks = collectionLinksContainers[
			i
		].getElementsByClassName('nav-collections__link');

		var currentNav =
			collectionLinksContainers[i].parentElement.parentElement;
		var currentNavLinkList =
			currentNav.getElementsByClassName('nav__link-list')[0];

		for (var j = 0; j < currentCollectionLinks.length; j++) {
			var newLink = document.createElement('a');
			newLink.className = 'nav__link nav__link--inserted';
			newLink.href = currentCollectionLinks[j].href;
			newLink.innerHTML = currentCollectionLinks[j].innerHTML;
			currentNavLinkList.appendChild(newLink);
		}
	}
	isCollectionLinksInMobileMenu = true;
}

function removeCollectionLinksFromMobileMenu() {
	for (var i = 0; i < collectionLinksContainers.length; i++) {
		var currentNav =
			collectionLinksContainers[i].parentElement.parentElement;
		var currentNavLinkList =
			currentNav.getElementsByClassName('nav__link-list')[0];
		var insertedLinks = currentNavLinkList.getElementsByClassName(
			'nav__link--inserted'
		).length;
		var firstLength = currentNavLinkList.children.length;
		while (
			currentNavLinkList.children.length >
			firstLength - insertedLinks
		) {
			currentNavLinkList.removeChild(currentNavLinkList.lastChild);
		}
	}
	isCollectionLinksInMobileMenu = false;
}

window.addEventListener('resize', function () {
	if (window.innerWidth <= 900) {
		displayCollectionLinksInMobileMenu();
	} else {
		removeCollectionLinksFromMobileMenu();
	}
});

if (window.innerWidth < 900) {
	displayCollectionLinksInMobileMenu();
}

// Brands
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
new Swiper('#swiper-3', {
	slidesPerView: slidesPerView,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	navigation: {
		nextEl: '#swiper-button-next-3',
		prevEl: '#swiper-button-prev-3'
	}
});
