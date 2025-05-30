// Redirect to login if not authenticated
if (sessionStorage.getItem("auth") !== "true") {
  window.location.href = "/index.html";
}

// Page navigation function
function goTo(page) {
  window.location.href = page;
}
function goTo(page) {
  window.location.href = page;
}
