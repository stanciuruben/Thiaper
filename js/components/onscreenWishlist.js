var onScreenWishlist = document.getElementById('onscreen-wishlist');
var wishlistOpeners = document.querySelectorAll(
	'*[data-open="onscreen-wishlist"]'
);
var wishlistClosers = document.querySelectorAll(
	'*[data-close="onscreen-wishlist"]'
);
var wishlistOpenClass = 'side-modal--open';

function setWishlistAriaExpanded(isExpanded) {
	for (var i = 0; i < wishlistOpeners.length; i++) {
		wishlistOpeners[i].setAttribute('aria-expanded', isExpanded);
	}
	for (var i = 0; i < wishlistClosers.length; i++) {
		wishlistClosers[i].setAttribute('aria-expanded', isExpanded);
	}
}

for (var i = 0; i < wishlistOpeners.length; i++) {
	var wishlistOpener = wishlistOpeners[i];

	wishlistOpener.addEventListener('click', function () {
		if (wishlistOpener.getAttribute('aria-expanded') === 'false') {
			onScreenWishlist.close();
			onScreenWishlist.show();
			onScreenWishlist.classList.add(wishlistOpenClass);
			setWishlistAriaExpanded('true');
		}
	});
}

for (var i = 0; i < wishlistClosers.length; i++) {
	var wishlistCloser = wishlistClosers[i];

	wishlistCloser.addEventListener('click', function () {
		if (wishlistCloser.getAttribute('aria-expanded') === 'true') {
			onScreenWishlist.classList.remove(wishlistOpenClass);
			onScreenWishlist.close();
			setWishlistAriaExpanded('false');
		}
	});
}
