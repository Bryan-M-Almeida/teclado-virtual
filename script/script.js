const btn = document.querySelectorAll(".tecla");
const btnShift = document.querySelector(".shift");
const btnEnter = document.querySelector(".enter");
const btnBackspace = document.querySelector(".backspace");
const btnSpace = document.querySelector(".space");
const escrever = document.querySelector(".resultado");

let shiftAtivo = false;

btn.forEach(function (botao) {
    botao.addEventListener("click", function () {
        escrever.value += this.textContent;
    });
});

/* shift */
btnShift.addEventListener("click", function () {
    shiftAtivo = !shiftAtivo;
    btn.forEach(btn => {
        const letra = btn.textContent;
        btn.textContent = shiftAtivo ? letra.toUpperCase() : letra.toLowerCase();
    });
});

/* espaço */
btnSpace.addEventListener("click", function () {
    escrever.value += " ";
});

/* apagar */
btnBackspace.addEventListener("click", function () {
    escrever.value = escrever.value.slice(0, -1);
});

/* enter */
btnEnter.addEventListener("click", function () {
    escrever.value += "\n";
});
