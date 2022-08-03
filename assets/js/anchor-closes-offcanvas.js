// window.addEventListener("load", function () {
// 	const toc_anchors = document.querySelectorAll("#toc a");
// 	for (let i = 0; i < toc_anchors.length; i++) {
// 		toc_anchors[i].setAttribute("data-bs-dismiss", "offcanvas");
// 	}
// });
document.addEventListener("DOMContentLoaded", function () {
	var myOffcanvas = document.getElementById("offcanvasNavbar");
	var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

	const toc_anchors = document.querySelectorAll("#toc a");
	for (let i = 0; i < toc_anchors.length; i++) {
		toc_anchors[i].addEventListener("click", function (e) {
			bsOffcanvas.toggle();
			e.stopPropagation();
			// e.preventDefault();
		});
	}
});
