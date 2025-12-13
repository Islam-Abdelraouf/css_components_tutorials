

const container = document.querySelector(".card-body");

container.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    button.querySelector("ripple")?.remove();
    
    const ripple = document.createElement("span");

    ripple.classList.add("ripple");
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;

    button.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
        ripple.remove();
    });

});