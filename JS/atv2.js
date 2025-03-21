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