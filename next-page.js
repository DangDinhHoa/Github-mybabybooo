onload = () => {
    document.body.classList.remove("container");
};

const book = document.querySelector(".book");
const openBookBtn = document.getElementById("openBookBtn");
let currentPage = 0;

openBookBtn.addEventListener("click", () => {
    book.classList.add("sliding"); // Start sliding animation
    setTimeout(() => {
        book.classList.add("open"); // Open book after slide
        openBookBtn.style.display = "none";
    }, 500); // Match the slide transition duration (0.5s)
});

book.addEventListener("click", () => {
    if (currentPage < 3) {
        currentPage++;
        book.classList.add(`page-${currentPage}`);
    }
});