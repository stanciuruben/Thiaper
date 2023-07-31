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

var navMain = document.querySelectorAll('.nav-fixed .nav-main');

window.addEventListener('scroll', function () {
	if (window.scrollY > 300) {
		for (var i = 0; i < navMain.length; i++) {
			navMain[i].style.padding = '1rem 1.5rem';
		}
	} else {
		for (var i = 0; i < navMain.length; i++) {
			navMain[i].style.padding = '1.5rem';
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
	var insertedLinks = document.getElementsByClassName('nav__link--inserted');
	for (var i = 0; i < insertedLinks.length; i++) {
		insertedLinks[i].remove();
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
var swipers = new Swiper('.swiper', {
	slidesPerView: slidesPerView,
	speed: 400,
	spaceBetween: 16,
	grabCursor: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

for (var i = 0; i < swipers.length; i++) {
	if (swipers[i].wrapperEl.children.length <= slidesPerView) {
		swipers[i].el.style.width = '100%';
		var prevBtn =
			swipers[i].el.parentElement.getElementsByClassName(
				'swiper-button-prev'
			)[0];
		var nextBtn =
			swipers[i].el.parentElement.getElementsByClassName(
				'swiper-button-next'
			)[0];
		prevBtn.remove();
		nextBtn.remove();
	}
}
