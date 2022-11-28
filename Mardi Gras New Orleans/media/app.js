// The Images Container
let lightBox = document.createElement("div");
lightBox.id = "lightBox";
document.body.append(lightBox);

// Capturing Every Image
let images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    lightBox.classList.add("active");
    let img = document.createElement("img");
    img.src = image.src;
    img.classList.add("lightBoxImg");
    // Prevent Multiple Images
    while (lightBox.firstChild) {
      lightBox.removeChild(lightBox.firstChild);
    }
    lightBox.append(img);
  });
});

lightBox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightBox.classList.remove("active");
});
