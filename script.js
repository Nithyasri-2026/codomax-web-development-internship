const button = document.querySelector("#hero button");

if (button) {
    button.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}
