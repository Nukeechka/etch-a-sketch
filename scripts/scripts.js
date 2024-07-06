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
        if (!box.classList.contains("hovered")) {
          box.classList.add("hovered");
          let colorArr = [];
          for (let i = 0; i < 3; i++) {
            let randomNumber = Math.floor(Math.random() * 256);
            colorArr[i] = randomNumber;
          }
          box.style.backgroundColor = `rgb(${colorArr[0]}, ${colorArr[1]}, ${colorArr[2]}) `;
          box.style.opacity = "0.1";
        }
        if (box.style.opacity <= "1") {
          let newOpacity = parseFloat(box.style.opacity) + 0.1;
          box.style.opacity = newOpacity.toString();
          // console.log(newOpacity);
        }
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
