var onScreenCart = document.getElementById('onscreen-cart');
var cartTogglers = document.querySelectorAll('*[data-toggle="onscreen-cart"]');

for (var i = 0; i < cartTogglers.length; i++) {
	var cartToggler = cartTogglers[i];
	var chevIcon = cartToggler.getElementsByClassName(
		'onscreen-cart__toggler__chev'
	)[0];

	cartToggler.addEventListener('click', function () {
		if (onScreenCart.style.bottom === '-27rem') {
			onScreenCart.style.bottom = '-2px';
			chevIcon.style.transform = 'rotate(0)';
			return;
		}
		onScreenCart.style.bottom = '-27rem';
		chevIcon.style.transform = 'rotate(180deg)';
	});
}
