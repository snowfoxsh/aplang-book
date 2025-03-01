document.addEventListener("DOMContentLoaded", function () {
    let menuTitle = document.querySelector(".menu-title");
    if (menuTitle) {
        menuTitle.addEventListener("click", function () {
            window.location.href = "https://aplang.org/";
        });
    }
});
