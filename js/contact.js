// Message when form sent in contact page
const message = "Message sent ;-)";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });
