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
    i++;
    if ((i % 3) == 0) botVermelho.click();
    if ((i % 3) == 1) botVerde.click();
    if ((i % 3) == 2) botAzul.click();
    setTimeout(Mudar, 1000);
}

console.log("Para poder ativar uma animação, execute a função \"Mudar();\"");