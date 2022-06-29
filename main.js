const containers = document.querySelectorAll(".container");
const texts = document.querySelectorAll(".texts");

const hideAll = () => {
  texts.forEach((ans, index) => {
    const answers = texts[index].lastElementChild;
    answers.style.display = "none";
    const quest = texts[index].firstElementChild;
    quest.style.fontWeight = "300";
  });
};
hideAll();
containers.forEach((contain, index) => {
  const hiddenParagraph = texts[index].lastElementChild;
  const quest = texts[index].firstElementChild;
  contain.addEventListener("click", (event) => {
    if (hiddenParagraph.style.display === "none") {
      hideAll();
      hiddenParagraph.style.display = "block";
      if (hiddenParagraph.style.display === "block") {
        quest.style.fontWeight = "700";
      }
    } else {
      hiddenParagraph.style.display = "none";
      if ((hiddenParagraph.style.display = "none")) {
        quest.style.fontWeight = "300";
      }
    }
  });
});
