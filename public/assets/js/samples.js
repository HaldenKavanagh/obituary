document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".grid img");
  const largeImage = document.getElementById("largeImage");

  thumbnails.forEach((img) => {
    img.addEventListener("click", function () {
      // Update the large image
      largeImage.src = this.src;

      // Remove border from all thumbnails
      thumbnails.forEach((image) => {
        image.classList.remove("border-blue-500");
        image.classList.add("border-transparent");
      });

      // Add border to the selected image
      this.classList.remove("border-transparent");
      this.classList.add("border-blue-500");
    });
  });
});
