let storedPic = localStorage.getItem("favorite");
let picId = JSON.parse(storedPic);
let container = document.createElement("div");
container.classList.add("grid");
document.body.append(container);
let flag = 0;

display();
function display() {
  if (picId.length === 0) {
    container.innerHTML = "";
  }
  picId.map((img) => {
    if (flag > 0) {
      container.innerHTML = "";
    }

    const frame = document.createElement("div");
    frame.style.position = "relative";
    const remove = document.createElement("h5");
    remove.classList.add("remove");
    frame.append(remove);
    const image = document.createElement("img");
    image.src = img;
    image.classList.add("frame");
    frame.append(image);
    container.append(frame);
    flag = 0;
  });
}
window.addEventListener("click", () => {
  let shows = document.querySelectorAll(".frame");
  shows.forEach((show) => {
    show.addEventListener("click", () => {
      flag++;
      picId = picId.filter((pic) => pic !== show.src);
      display();
    });
  });
});
