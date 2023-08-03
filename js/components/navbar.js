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

// Search
function toggleSearchForm(searchToggler) {
	var navLinkListContainer = searchToggler.parentElement.parentElement;
	var navMain = navLinkListContainer.parentElement;
	if (searchToggler.getAttribute('aria-expanded') === 'false') {
		// Check if the mobile navigation is open and close it
		var navLinkListCloser = navLinkListContainer.getElementsByClassName(
			'nav__link-list-closer'
		)[0];
		var navLinkListOpener = navMain.getElementsByClassName(
			'nav__link-list-opener'
		)[0];

		if (
			navLinkListOpener.getAttribute('aria-expanded') === 'true' &&
			navLinkListCloser.getAttribute('aria-expanded') === 'true'
		) {
			toggleMobileMenu(navLinkListCloser, navLinkListOpener);
		}
		// Display the search form
		var navSearch =
			navMain.parentElement.getElementsByClassName('nav__search')[0];
		navSearch.style.display = 'block';
		// Focus the search input inside the form
		navSearch.getElementsByClassName('nav__search__input')[0].focus();
		// Set aria-expanded to true
		searchToggler.setAttribute('aria-expanded', 'true');
	} else {
		// Remove the search form
		var navSearch =
			navMain.parentElement.getElementsByClassName('nav__search')[0];
		navSearch.style.display = 'none';
		// Set aria-expanded to false
		searchToggler.setAttribute('aria-expanded', 'false');
	}
}

var searchTogglers = document.getElementsByClassName('nav__search-toggler');

for (var i = 0; i < searchTogglers.length; i++) {
	var toggler = searchTogglers[i];
	toggler.addEventListener('click', toggleSearchForm.bind(this, toggler));
}

function toggleEraseButton(inputElement) {
	var navSearch = inputElement.parentElement;
	var eraseButton = navSearch.getElementsByClassName('nav__search__erase')[0];

	if (inputElement.value.length > 0) {
		eraseButton.style.display = 'block';
		return;
	}
	eraseButton.style.display = 'none';
}

var searchInputs = document.getElementsByClassName('nav__search__input');

for (var i = 0; i < searchInputs.length; i++) {
	var input = searchInputs[i];

	input.addEventListener('input', toggleEraseButton.bind(this, input));
	input.addEventListener('focus', toggleEraseButton.bind(this, input));
}

function eraseInput(eraseButton) {
	var navSearch = eraseButton.parentElement;
	var inputElement =
		navSearch.getElementsByClassName('nav__search__input')[0];
	inputElement.value = '';
	inputElement.focus();
	eraseButton.style.display = 'none';
}

var eraseButtons = document.getElementsByClassName('nav__search__erase');

for (var i = 0; i < eraseButtons.length; i++) {
	var eraseButton = eraseButtons[i];
	eraseButton.addEventListener('click', eraseInput.bind(this, eraseButton));
}
