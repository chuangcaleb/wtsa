var offcanvasButton = document.getElementById("offcanvasButton");
var offcanvasCloseButton = document.getElementById("offcanvasCloseButton");
var offcanvas = document.getElementById("offcanvasNavbar");
window.addEventListener("DOMContentLoaded", function () {
	initOffcanvas();
	offcanvasButton.addEventListener("click", function () {
		resetOffcanvas();
	});
	offcanvasCloseButton.addEventListener("click", function () {
		resetOffcanvas();
	});
});
function initOffcanvas() {
	var offcanvasShown =
		localStorage.getItem("offcanvasNavbar") !== null &&
		localStorage.getItem("offcanvasNavbar") === "shown";
	offcanvasShown
		? offcanvas.classList.add("show")
		: offcanvas.classList.remove("show");
}
function resetOffcanvas() {
	if (offcanvas.classList.contains("show")) {
		offcanvas.classList.remove("show");
		localStorage.removeItem("offcanvasNavbar");
	} else {
		offcanvas.classList.add("show");
		localStorage.setItem("offcanvasNavbar", "shown");
	}
}
