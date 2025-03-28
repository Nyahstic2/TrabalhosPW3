const botVermelho = document.querySelector("#vermelho");
const botVerde = document.querySelector("#verde");
const botAzul = document.querySelector("#azul");
const colorChanger = document.querySelector("#colorchanger");

botVermelho.addEventListener("click", () => {
    colorChanger.classList.add("corver");
    colorChanger.classList.remove("corverd");
    colorChanger.classList.remove("corblu");
});

botVerde.addEventListener("click", () => {
    colorChanger.classList.remove("corver");
    colorChanger.classList.add("corverd");
    colorChanger.classList.remove("corblu");
});

botAzul.addEventListener("click", () => {
    colorChanger.classList.remove("corver");
    colorChanger.classList.remove("corverd");
    colorChanger.classList.add("corblu");
});

let i = 1;
function Mudar(){
    let num = Math.floor(Math.sin(i * Math.PI) * 10);
    i++;
    if (num <= 3) botVermelho.click();
    if (num <= 6) botVerde.click();
    if (num <= 9) botAzul.click();
    setTimeout(() => {Mudar();}, 1);
}

console.log("Para poder ativar uma animação, execute a função \"Mudar();\"");