 const appointmentForm = document.getElementById("appointmentForm");
    const formMessage = document.getElementById("formMessage");
    const dateInput = document.getElementById("date");

    const today = new Date();
    dateInput.min =
      today.getFullYear() + "-" +
      String(today.getMonth() + 1).padStart(2, "0") + "-" +
      String(today.getDate()).padStart(2, "0");

    appointmentForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const requiredFields = appointmentForm.querySelectorAll("[required]");
      let valid = true;

      requiredFields.forEach(function (field) {
        field.classList.remove("invalid");

        if (!field.value.trim()) {
          field.classList.add("invalid");
          valid = false;
        }
      });

      if (!valid) {
        formMessage.style.display = "none";
        return;
      }

      formMessage.style.display = "block";
      appointmentForm.reset();
    });

    document.getElementById("newsletterForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("newsletterEmail");

      if (!email.checkValidity()) {
        email.focus();
        return;
      }

      email.value = "";
      alert("Thank you for subscribing!");
    });