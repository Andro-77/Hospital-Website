
// Appointment Form


const appointmentForm = document.querySelector(".appointment-form");

appointmentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your appointment has been booked successfully!");
});



// Specialties


const specialtyCards = document.querySelectorAll(".specialty-card");

specialtyCards.forEach(function (card) {
    card.addEventListener("click", function () {

        specialtyCards.forEach(function (item) {
            item.classList.remove("specialty-active");
        });

        card.classList.add("specialty-active");
    });
});
