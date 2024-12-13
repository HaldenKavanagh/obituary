document.addEventListener("DOMContentLoaded", function () {
  console.log("hello from script.js");

  // Initialize Email.js with your user ID
  emailjs.init({
    publicKey: "FuUQqDZffoBgp7Xd2",
  });

  // Function to display success message
  function successMessage() {
    const message = document.createElement("div");
    message.className =
      "success-message p-3 bg-green-500 text-white rounded mt-4 text-center";
    message.innerText = "Your message has been sent successfully!";
    document.getElementById("contact-form").appendChild(message);
    setTimeout(() => message.remove(), 5000); // Remove message after 5 seconds
  }

  // Function to display error message
  function errorMessage() {
    const message = document.createElement("div");
    message.className =
      "error-message p-3 bg-red-500 text-white rounded mt-4 text-center";
    message.innerText = "Oops! Something went wrong. Please try again.";
    document.getElementById("contact-form").appendChild(message);
    setTimeout(() => message.remove(), 5000); // Remove message after 5 seconds
  }

  // Form submission handler
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_eahlnl5", "template_e2uplpe", this).then(
        () => {
          console.log("SUCCESS!");
          successMessage();
          this.reset(); // Clear form after successful submission
        },
        (error) => {
          console.log("FAILED...", error);
          errorMessage();
        }
      );
    });
});
