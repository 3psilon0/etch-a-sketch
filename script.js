const container = document.getElementById("container");
const buttonContainer = document.getElementById("button-container");
const gridSlider = document.getElementById("grid-slider");

const gridSliderValue = document.createElement("p");
gridSliderValue.style.cssText = "text-align:center;padding=0;";
gridSlider.after(gridSliderValue);

gridSlider.addEventListener("input", function (){
    gridSliderValue.innerText = `${this.value} x ${this.value}`;
    container.textContent = "";
    for(let i = 0; i < this.value; i++){
        let column = document.createElement("div");
        column.style.cssText = "display:flex;flex-direction:column;"
        for(let j = 0; j < this.value; j++){
            let pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.style.width = `${550/this.value}px`;
            pixel.style.height = `${550/this.value}px`;
            column.appendChild(pixel);
        }
        container.append(column);
    }
});

const onLoad = new Event('input');
gridSlider.dispatchEvent(onLoad);
