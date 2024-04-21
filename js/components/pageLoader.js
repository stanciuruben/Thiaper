document.body.style.overflow = "hidden";

document.addEventListener("DOMContentLoaded", function () {
	var pageLoader = document.getElementsByClassName("page-loader");
	if (pageLoader[0]) {
		pageLoader[0].style.display = "none";
		document.body.removeChild(pageLoader[0]);
	}
	document.body.style.overflow = "auto";
});
