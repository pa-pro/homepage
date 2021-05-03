{
    const welcome = () => {
        console.log("Cześć!");
    };

    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const themeName1 = document.querySelector(".themeName1");
        body.classList.toggle("newBackground");
        themeName1.innerText = body.classList.contains("newBackground") ? "Przywróć" : "Zmień";
    };

    const toggleHeader = () => {
        const themeName2 = document.querySelector(".themeName2");
        const section__header = document.querySelector(".section__header");
        section__header.classList.toggle("newHeader");
        themeName2.innerText = section__header.classList.contains("newHeader") ? "Przywróć" : "Zmień";
    };

    const removeButton = () => {
        const buttonRemove = document.querySelector(".js-buttonRemove");
        buttonRemove.remove();
    };

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackground");
        const changeHeaderButton = document.querySelector(".js-changeHeader");
        const buttonRemove = document.querySelector(".js-buttonRemove");
        changeBackgroundButton.addEventListener("click", toggleBackground);
        changeHeaderButton.addEventListener("click", toggleHeader);
        buttonRemove.addEventListener("click", removeButton);
        
        welcome();
    };

    init();
}