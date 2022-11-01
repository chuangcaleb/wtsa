var offcanvasToggleButton = document.getElementById("offcanvasToggleButton");
var offcanvasCloseButton = document.getElementById("offcanvasCloseButton");
var sidebarBody = document.getElementById("sidebarBody");
var offcanvas = document.getElementById("offcanvasNavbar");

window.addEventListener("DOMContentLoaded", function () {
  initOffcanvas();
  offcanvasToggleButton.addEventListener("click", function () {
    resetOffcanvas();
  });
  offcanvasCloseButton.addEventListener("click", function () {
    resetOffcanvas();
  });
});

function initOffcanvas() {
  var offcanvasShown =
    // localStorage.getItem("offcanvasNavbar") !== null &&
    localStorage.getItem("offcanvasNavbar") === "shown";
  offcanvasShown
    ? offcanvas.classList.add("show")
    : offcanvas.classList.remove("show");
  setTimeout(function () {
    offcanvas.style.transition = "transform 0.3s ease-in-out";
    sidebarBody.style.transition = "transform 0.3s ease-in-out";
  }, 1);
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
