var onScreenCoupons = document.getElementById('onscreen-coupons');
var couponsOpeners = document.querySelectorAll(
	'*[data-open="onscreen-coupons"]'
);
var couponsClosers = document.querySelectorAll(
	'*[data-close="onscreen-coupons"]'
);
var couponsOpenClass = 'side-modal--open';

function setCouponsAriaExpanded(isExpanded) {
	for (var i = 0; i < couponsOpeners.length; i++) {
		couponsOpeners[i].setAttribute('aria-expanded', isExpanded);
	}
	for (var i = 0; i < couponsClosers.length; i++) {
		couponsClosers[i].setAttribute('aria-expanded', isExpanded);
	}
}

for (var i = 0; i < couponsOpeners.length; i++) {
	var couponsOpener = couponsOpeners[i];

	couponsOpener.addEventListener('click', function () {
		if (couponsOpener.getAttribute('aria-expanded') === 'false') {
			onScreenCoupons.close();
			onScreenCoupons.show();
			onScreenCoupons.classList.add(couponsOpenClass);
			setCouponsAriaExpanded('true');
		}
	});
}

for (var i = 0; i < couponsClosers.length; i++) {
	var couponsCloser = couponsClosers[i];

	couponsCloser.addEventListener('click', function () {
		if (couponsCloser.getAttribute('aria-expanded') === 'true') {
			onScreenCoupons.classList.remove(couponsOpenClass);
			onScreenCoupons.close();
			setCouponsAriaExpanded('false');
		}
	});
}
