const slider = document.querySelector("#tamanho");
const div = document.querySelector("#resizer");

function lidarTamanho(){
    let tamanhoInt = parseInt(slider.value);
    div.setAttribute("style", `width: ${tamanhoInt}px; height: ${tamanhoInt}px;`);
}