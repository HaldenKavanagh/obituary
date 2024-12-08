document.addEventListener("DOMContentLoaded", function () {
  console.log("hello from script.js");

  // Initialize Email.js with your user ID
  emailjs.init({
    publicKey: "FuUQqDZffoBgp7Xd2",
  });

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_eahlnl5", "template_e2uplpe", this).then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
});
