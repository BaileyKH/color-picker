const colorPicker = document.getElementById("color-picker");
const colorMode = document.getElementById("mode");
const output = document.getElementById("color-container");
const colorButton = document.getElementById("color-btn");
const hexOutput = document.getElementById("hex-container");

function handleColorGeneration() {
    let color = colorPicker.value.slice(1);
    let mode = colorMode.value;

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${mode}&count=5`)
        .then(res => res.json())
        .then(data => renderColors(data))
}

function renderColors(data) {
    if (output) {
        output.innerHTML = '';
        hexOutput.innerHTML = ''
        data.colors.forEach((color) => {
            output.innerHTML += `<div class="colors" style="background-color:${color.hex.value};"></div>`;
            hexOutput.innerHTML += `<div class="hex-codes"><p id="copy-hex" style="cursor: pointer;">${color.hex.value}</p></div>`
            hexOutput.classList.remove("hidden")
        });
    }
}

colorButton.addEventListener("click", handleColorGeneration);






