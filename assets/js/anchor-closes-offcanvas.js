document.addEventListener("DOMContentLoaded", function () {
  // If above xl-breakpoint — if changing screen width, must reload page, which is a negligible problem
  if (document.documentElement.clientWidth < 1200) {
    var myOffcanvas = document.getElementById("offcanvasNavbar");
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

    const toc_anchors = document.querySelectorAll("#offcanvasNavbar a");

    toc_anchors.forEach((a) => {
      a.addEventListener("click", function (e) {
        bsOffcanvas.toggle();
        e.stopPropagation();
        localStorage.removeItem("offcanvasNavbar");
      });
    });
  }
});
