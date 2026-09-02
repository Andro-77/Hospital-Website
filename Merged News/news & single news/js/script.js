/* =========================================================
   MERGED JAVASCRIPT FOR BOTH NEWS PAGES
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Newsletter - works with either HTML page
    const newsletterForm =
        document.getElementById("newsletterForm") ||
        document.getElementById("newsletter");

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const emailInput = newsletterForm.querySelector('input[type="email"]');

            if (emailInput && emailInput.checkValidity()) {
                alert("Thank you for subscribing!");
                newsletterForm.reset();
            }
        }, true);
    }

    // Search - available on the Single News page
    const searchForm = document.getElementById("searchForm");

    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const input = searchForm.querySelector('input[type="search"]');
            const value = input ? input.value.trim() : "";

            if (value !== "") {
                console.log("Searching for:", value);
            } else {
                alert("Please enter a search term.");
            }
        });
    }
});
