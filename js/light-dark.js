let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
    if (document.body.className != "dark") {
        this.firstElementChild.src = "img/light.svg";
    } else {
        this.firstElementChild.src = "img/dark.svg";
    }
    document.body.classList.toggle("dark");
});
