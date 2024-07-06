window.onload = function startSketch() {
  const container = document.querySelector(".container");

  function createBoxes(numberPerRow) {
    const total = numberPerRow * numberPerRow + numberPerRow;
    const mod = numberPerRow + 1;
    let divSize = 768 / numberPerRow;

    for (let i = 1; i < total; i++) {
      const div = document.createElement("div");
      div.classList.add("box");
      if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
      } else {
        div.style.cssText = `border: 1px solid black; height: ${divSize}px; width: ${divSize}px`;
      }

      container.appendChild(div);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
      box.addEventListener("mouseover", () => {
        box.classList.add("hovered");
      });
    });
  }

  createBoxes(16);

  const promptButton = document.createElement("button");
  promptButton.classList.add("btn");
  promptButton.textContent = "Create a new grid";
  container.parentNode.insertBefore(promptButton, container);

  promptButton.addEventListener("click", () => {
    let numberPerRow = parseInt(prompt("Enter a number of rows: "));
    if (numberPerRow > 100) {
      alert("You can't create a grid than more 100 pixels");
      return;
    }
    container.replaceChildren();
    createBoxes(numberPerRow);
  });
};
