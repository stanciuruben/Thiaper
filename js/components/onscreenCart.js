var onScreenCart = document.getElementById('onscreen-cart');
var cartOpeners = document.querySelectorAll('*[data-open="onscreen-cart"]');
var cartClosers = document.querySelectorAll('*[data-close="onscreen-cart"]');
var cartOpenClass = 'side-modal--open';

function setCartAriaExpanded(isExpanded) {
	for (var i = 0; i < cartOpeners.length; i++) {
		cartOpeners[i].setAttribute('aria-expanded', isExpanded);
	}
	for (var i = 0; i < cartClosers.length; i++) {
		cartClosers[i].setAttribute('aria-expanded', isExpanded);
	}
}

for (var i = 0; i < cartOpeners.length; i++) {
	var cartOpener = cartOpeners[i];

	cartOpener.addEventListener('click', function () {
		if (cartOpener.getAttribute('aria-expanded') === 'false') {
			onScreenCart.close();
			onScreenCart.show();
			onScreenCart.classList.add(cartOpenClass);
			setCartAriaExpanded('true');
		}
	});
}

for (var i = 0; i < cartClosers.length; i++) {
	var cartCloser = cartClosers[i];

	cartCloser.addEventListener('click', function () {
		if (cartCloser.getAttribute('aria-expanded') === 'true') {
			onScreenCart.classList.remove(cartOpenClass);
			onScreenCart.close();
			setCartAriaExpanded('false');
		}
	});
}
