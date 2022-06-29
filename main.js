const containers = document.querySelectorAll(".container");
const texts = document.querySelectorAll(".texts");
const quest = document.getElementById("quest");

containers.forEach((contain, index) => {
  const accessP = texts[index].lastElementChild;
  accessP.style.display = "none";
  contain.addEventListener("click", () => {
    quest.style.fontWeight = "700";
    if (accessP.style.display === "none") {
      accessP.style.display = "block";
    } else {
      accessP.style.display = "none";
    }
  });
});
