// =========================
// Contact Form Validation
// Same idea as Session 14
// =========================


let handleError = (input, msg = "") => {
    input.nextElementSibling.innerText = msg
}


// =========================
// Name Validation
// =========================

let nameValidation = (element) => {

    let inputValue = element.value.trim()

    if (inputValue.length < 3) {
        handleError(element, "enter at least 3 characters")
        return false
    }
    else {
        handleError(element)
        return true
    }
}


// =========================
// Email Validation
// =========================

let emailValidation = (element) => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let inputValue = element.value.trim()

    if (emailRegex.test(inputValue)) {
        handleError(element)
        return true
    }
    else {
        handleError(element, "please enter a valid email")
        return false
    }
}


// =========================
// Subject Validation
// =========================

let subjectValidation = (element) => {

    let inputValue = element.value.trim()

    if (inputValue.length < 3) {
        handleError(element, "enter at least 3 characters")
        return false
    }
    else {
        handleError(element)
        return true
    }
}


// =========================
// Message Validation
// =========================

let messageValidation = (element) => {

    let inputValue = element.value.trim()

    if (inputValue.length < 5) {
        handleError(element, "enter at least 5 characters")
        return false
    }
    else {
        handleError(element)
        return true
    }
}


// =========================
// Get Form
// =========================

let contactForm = document.getElementById("contactForm")

let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userSubject = document.getElementById("userSubject")
let userMessage = document.getElementById("userMessage")


// =========================
// Validation While Typing
// =========================

contactForm.addEventListener("input", (e) => {

    if (e.target.id == "userName") {
        nameValidation(e.target)
    }

    else if (e.target.id == "userEmail") {
        emailValidation(e.target)
    }

    else if (e.target.id == "userSubject") {
        subjectValidation(e.target)
    }

    else if (e.target.id == "userMessage") {
        messageValidation(e.target)
    }

})


// =========================
// Submit Form
// =========================

contactForm.addEventListener("submit", (e) => {

    e.preventDefault()

    let nameIsValid = nameValidation(userName)
    let emailIsValid = emailValidation(userEmail)
    let subjectIsValid = subjectValidation(userSubject)
    let messageIsValid = messageValidation(userMessage)


    if (
        nameIsValid &&
        emailIsValid &&
        subjectIsValid &&
        messageIsValid
    ) {

        alert("Your message has been sent successfully!")

        contactForm.reset()
    }

})
