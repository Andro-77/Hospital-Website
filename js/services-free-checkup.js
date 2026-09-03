function showOverlay(button) {

    let overlay = button.parentElement.querySelector(".blue-overlay");

    overlay.classList.toggle("active");

    button.classList.toggle("overlay-icon");

}





const learnMoreLinks = document.querySelectorAll(".card-content a");

learnMoreLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const arrow = this.querySelector("span");

        arrow.style.transform = "translateX(8px)";

        setTimeout(function() {
            arrow.style.transform = "translateX(0)";
        }, 300);
    });
});












var items = document.querySelectorAll(".free-checkup-item");

var image = document.getElementById("freeCheckupImage");


items.forEach(function(item) {

    item.addEventListener("click", function() {

        // Remove active from all items
        items.forEach(function(x) {
            x.classList.remove("active");
        });


        // Add active to clicked item
        item.classList.add("active");


        // Change image
        image.src = item.getAttribute("data-image");

    });

});






const profileLinks = document.querySelectorAll(".view-profile");

profileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        const doctorNumber = this.getAttribute("href").split("=")[1];

        localStorage.setItem("selectedDoctor", doctorNumber);

    });

});