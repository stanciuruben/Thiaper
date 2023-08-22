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
	link.focus();
}

function hideCollectionNavigation(link, parentElement) {
	if (
		parentElement.matches(':hover') ||
		link.getAttribute('aria-expanded') === null
	)
		return;
	link.setAttribute('aria-expanded', 'false');
	link.blur();
}

var collectionLinks = document.getElementsByClassName('nav-collections__link');

function handleCollectionNavigationFocus(link, parentElement) {
	for (var i = 0; i < collectionLinks.length; i++) {
		if (link.isEqualNode(collectionLinks[i])) {
			continue;
		}
		hideCollectionNavigation(collectionLinks[i], parentElement);
	}
	showCollectionNavigation(link);
}

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
	currentLink.addEventListener(
		'focusin',
		handleCollectionNavigationFocus.bind(
			this,
			currentLink,
			currentLink.parentElement
		)
	);
}
