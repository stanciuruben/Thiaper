var search = document.getElementById('search');
var searchOpeners = document.querySelectorAll('*[data-open="search"]');
var searchClosers = document.querySelectorAll('*[data-close="search"]');

function setSearchAriaExpanded(isExpanded) {
	for (var i = 0; i < searchOpeners.length; i++) {
		searchOpeners[i].setAttribute('aria-expanded', isExpanded);
	}
	for (var i = 0; i < searchClosers.length; i++) {
		searchClosers[i].setAttribute('aria-expanded', isExpanded);
	}
}

for (var i = 0; i < searchOpeners.length; i++) {
	var searchOpener = searchOpeners[i];

	searchOpener.addEventListener('click', function () {
		if (searchOpener.getAttribute('aria-expanded') === 'false') {
			search.close();
			search.show();
			setSearchAriaExpanded('true');
		}
	});
}

for (var i = 0; i < searchClosers.length; i++) {
	var searchCloser = searchClosers[i];

	searchCloser.addEventListener('click', function () {
		if (searchCloser.getAttribute('aria-expanded') === 'true') {
			search.close();
			setSearchAriaExpanded('false');
		}
	});
}

search.addEventListener('keydown', function (evnt) {
	if (evnt.key === 'Escape') {
		search.close();
		setSearchAriaExpanded('false');
	}
});

function toggleEraseButton(inputElement, eraseButton) {
	if (inputElement.value.length > 0) {
		eraseButton.style.display = 'block';
		return;
	}
	eraseButton.style.display = 'none';
}

function eraseInput(eraseButton) {
	var navSearch = eraseButton.parentElement;
	var inputElement = navSearch.getElementsByClassName('search__input')[0];
	inputElement.value = '';
	inputElement.focus();
	eraseButton.style.display = 'none';
}

var eraseButton = document.querySelector('#search .search__erase');
eraseButton.addEventListener('click', eraseInput.bind(this, eraseButton));

var searchInput = document.querySelector('#search .search__input');
searchInput.addEventListener(
	'input',
	toggleEraseButton.bind(this, searchInput, eraseButton)
);
searchInput.addEventListener(
	'focus',
	toggleEraseButton.bind(this, searchInput, eraseButton)
);
