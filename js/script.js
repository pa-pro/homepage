console.log("Cześć!");

let buttonRemove = document.querySelector(".js-buttonRemove");
let body = document.querySelector(".body");
let changeBackgroundButton = document.querySelector(".js-changeBackground");
let changeHeaderButton = document.querySelector(".js-changeHeader");
let section__header = document.querySelector(".section__header");
let themeName1 = document.querySelector(".themeName1");
let themeName2 = document.querySelector(".themeName2");

buttonRemove.addEventListener("click", () => {
    buttonRemove.remove();
});

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("newBackground");

    themeName1.innerText = body.classList.contains("newBackground") ? "Przywróć" : "Zmień";
    
});

changeHeaderButton.addEventListener("click", () => {
    section__header.classList.toggle("newHeader");

    themeName2.innerText = section__header.classList.contains("newHeader") ? "Przywróć" : "Zmień";

});