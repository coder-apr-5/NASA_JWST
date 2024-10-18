document.addEventListener("DOMContentLoaded", function () {
    const yearList = document.getElementById("year-list");
    const imageDisplay = document.getElementById("image-display");
  
    yearList.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        // Get the data attributes for the clicked year
        const imageSrc = e.target.getAttribute("data-image");
        const linkHref = e.target.getAttribute("data-link");
  
        // Update the image source
        imageDisplay.src = imageSrc;
  
        // Set the image click to navigate to the specified link
        imageDisplay.onclick = function () {
          window.location.href = linkHref;
        };
      }
    });
  });
  