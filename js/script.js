
/* =====================================
   CONTAGEM REGRESSIVA
===================================== */

// Data da apresentação: 17/12/2026
// O horário está configurado para meia-noite.
// Pode ser alterado quando o horário oficial for definido.

document.addEventListener("DOMContentLoaded", () => {
    const dataEvento = new Date(2026, 11, 16, 0, 0, 0).getTime();

    const diasElemento = document.getElementById("days");
    const horasElemento = document.getElementById("hours");
    const minutosElemento = document.getElementById("minutes");
    const segundosElemento = document.getElementById("seconds");

    function atualizarContagem() {
        const agora = Date.now();
        const diferenca = dataEvento - agora;

        if (diferenca <= 0) {
            diasElemento.textContent = "00";
            horasElemento.textContent = "00";
            minutosElemento.textContent = "00";
            segundosElemento.textContent = "00";
            return;
        }

        const dias = Math.floor(diferenca / 86400000);
        const horas = Math.floor((diferenca % 86400000) / 3600000);
        const minutos = Math.floor((diferenca % 3600000) / 60000);
        const segundos = Math.floor((diferenca % 60000) / 1000);

        diasElemento.textContent = String(dias).padStart(2, "0");
        horasElemento.textContent = String(horas).padStart(2, "0");
        minutosElemento.textContent = String(minutos).padStart(2, "0");
        segundosElemento.textContent = String(segundos).padStart(2, "0");
    }

    atualizarContagem();
    setInterval(atualizarContagem, 1000);
});

/* =====================================
   MENU MOBILE
===================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu"
    );

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});


/* =====================================
   HEADER AO ROLAR A PÁGINA
===================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
