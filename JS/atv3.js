const slider = document.querySelector("#tamanho");
const div = document.querySelector("#resizer");

function lidarTamanho(){
    let tamanhoInt = parseInt(slider.value);
    if (tamanhoInt >= 1000) return;
    div.setAttribute("style", `width: ${tamanhoInt}px; height: ${tamanhoInt}px;`);
}

lidarTamanho();

let aumentar = true;
function Mudar(){ 
    if (aumentar) slider.value++;
    else slider.value--;

    if (slider.value == 1000) aumentar = false;
    if (slider.value == 100) aumentar = true;

    lidarTamanho();
}

function Animacao() {setInterval(() => {Mudar()}, 1);}


console.log("Para poder ativar uma animação, execute a função \"Animacao();\"");