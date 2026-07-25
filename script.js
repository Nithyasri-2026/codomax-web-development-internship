// Contact Button Scroll

const contactBtn = document.querySelector("#hero button");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Scroll to Top Button

const topBtn = document.getElementById("topBtn");

// Show button after scrolling 300px
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// Scroll to top when clicked
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
