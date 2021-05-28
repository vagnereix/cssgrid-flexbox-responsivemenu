document.addEventListener("DOMContentLoaded", function (event) {        
    const btn = document.getElementById("btn");

    if (btn) {
        console.log(btn);
    } else {
        console.log("sem botao");
    }

    function toggleMenu() {
        const nav = document.getElementById("nav");
        nav.classList.toggle("active");
        console.log("Oi");
    }

    btn.addEventListener("click", toggleMenu);
});