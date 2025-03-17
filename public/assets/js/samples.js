document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".grid img");
  const largeImage = document.getElementById("largeImage");

  thumbnails.forEach((img) => {
    img.addEventListener("click", function () {
      // Remove previous selection
      thumbnails.forEach((thumb) => {
        thumb.classList.remove("border-gray-800");
        thumb.classList.add("border-transparent"); // Reset others
      });

      // Add border to the clicked image
      this.classList.remove("border-transparent");
      this.classList.add("border-gray-800");

      // Update the large image
      largeImage.src = this.src;
    });
  });
});
