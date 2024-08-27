const gridContainer = document.getElementById("grid-container");
const buttonContainer = document.getElementById("button-container");
const gridSlider = document.getElementById("grid-slider");

let penColor = "black";
let bgColor = "white";

const setGridPixelColor = (grid) => {
    grid.target.style.backgroundColor = penColor;
};
let currentFunction = setGridPixelColor;

const gridSliderValue = document.createElement("p");
gridSliderValue.style.cssText = "text-align:center;margin-top:-5px;";
gridSlider.after(gridSliderValue);

gridSlider.addEventListener("input", function () {
    gridSliderValue.innerText = `${this.value} x ${this.value}`;
    gridContainer.textContent = "";
    for (let i = 0; i < this.value; i++) {
        let column = document.createElement("div");
        column.style.cssText = "display:flex;flex-direction:column;";
        for (let j = 0; j < this.value; j++) {
            let pixel = document.createElement("div");
            pixel.classList.add("pixel-border");
            pixel.style.boxSizing = "border-box";
            pixel.style.width = `${550 / this.value}px`;
            pixel.style.height = `${550 / this.value}px`;
            column.appendChild(pixel);
        }
        gridContainer.append(column);
    }
});

gridContainer.addEventListener("mousedown", (e) => {
    gridContainer.addEventListener("mousedown", currentFunction);
    gridContainer.addEventListener("mousemove", currentFunction);
});

gridContainer.addEventListener("mouseup", () => {
    gridContainer.removeEventListener("mousemove", currentFunction);
});

buttonContainer.addEventListener("click", (e) => {
    for (let i = 0; i < gridContainer.children.length; i++) {
        for (let j = 0; j < gridContainer.children.length; j++) {
            let pixel = gridContainer.children[i].children[j];
            switch (e.target.id) {
                case "clear-grid-btn":
                    pixel.style.backgroundColor = bgColor;
                    break;
                case "toggle-lines-btn":
                    pixel.classList.toggle("pixel-border");
                    break;
                default:
                    return;
            }
        }
    }
});
buttonContainer.addEventListener("input", (e) => {
    if (e.target.id === "color-pick-btn") {
        penColor = e.target.value;
    } else {
        return;
    }
});

const onLoad = new Event("input");
gridSlider.dispatchEvent(onLoad);
