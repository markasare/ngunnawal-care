'use strict';

/**
 * #PRELOADING
 */
const loadElement = document.querySelector("[data-preloader]");
window.addEventListener("load", function () {
  loadElement.classList.add("loaded");
});

/**
 * #MOBILE NAVBAR TOGGLE
 */
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}
navToggler.addEventListener("click", toggleNavbar);

/**
 *  #HEADER
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-go-top-btn]");
window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const isScrollingDown = scrollY >= 100;
  header.classList.toggle("active", isScrollingDown);
  backTopBtn.classList.toggle("active", isScrollingDown);
});

/**
 * #SCROLL REVEAL
 */
const revealElements = document.querySelectorAll("[data-reveal]");
const scrollReveal = function () {
  revealElements.forEach(function (element) {
    const topPosition = element.getBoundingClientRect().top;
    const isVisible = topPosition < window.innerHeight / 1.2;
    element.classList.toggle("revealed", isVisible);
  });
}
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

/**
 * Typing and Erasing Text
 */
const typedText = document.querySelector('.typed-text');
const textToType = "Where compassion meets care";
const welcomeText = "Welcome to Ngunnawal Care";
function typeAndEraseText() {
  typedText.textContent = '';
  let currentIndex = 0;
  let isTyping = true;
  const typingInterval = setInterval(() => {
    if (isTyping) {
      typedText.textContent += textToType[currentIndex];
      currentIndex++;
      if (currentIndex === textToType.length) {
        isTyping = false;
        setTimeout(() => {
          isTyping = true;
        }, 1500);
      }
    } else {
      typedText.textContent = textToType.substring(0, currentIndex);
      currentIndex--;
      if (currentIndex === 0) {
        clearInterval(typingInterval);
        setTimeout(typeAndEraseText, 2000);
      }
    }
  }, 100);
}
typeAndEraseText();
const welcomeTextElement = document.querySelector('.welcome-text');
welcomeTextElement.textContent = welcomeText;


// Get the enquiry form element
var enquiryForm = document.getElementById("enquiryForm");

// Get the enquiry button
var enquiryBtn = document.getElementById("enquiryBtn");

// Function to toggle the visibility of the enquiry form
function toggleEnquiryForm() {
    enquiryForm.classList.toggle("blur-background");
    enquiryForm.style.display = enquiryForm.style.display === "block" ? "none" : "block";
}

// Add event listener to the enquiry button
enquiryBtn.addEventListener("click", toggleEnquiryForm);




    // Function to close the enquiry form
    function closeForm() {
        var formSection = document.getElementById("enquiryForm");
        formSection.style.display = "none";
    }



    function sendEmail() {
        Email.send({
        Host : "smtp.elasticemail.com",
        Username : "the.orientalz@gmail.com",
        Password : "9C3ED8704FBCA6C865C0845705FE5898432D",
        To : 'the.orientalz@gmail.com',
        From : 'the.orientalz@gmail.com',
        Subject : "You've got a new inquiry!",
        Body :  "Name: " + document.getElementById('name').value + "<br>" +
                "Email: " + document.getElementById('email').value + "<br>" +
                "Phone: " + document.getElementById('phone').value + "<br>" +
                "Message: " + document.getElementById('message').value
            }).then(
    message => {
        // Handle success
        console.log(message);
        alert("Email sent successfully!");
    }
).catch(
    error => {
        // Handle errors
        console.error(error);
        alert("Failed to send email. Please try again later.");
    }
);
}