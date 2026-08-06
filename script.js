// Premium Landing Page Script

document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".glass-card");

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";

    setTimeout(() => {
        card.style.transition = "all 0.8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 200);

});
