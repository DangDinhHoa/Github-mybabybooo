onload = () => {
    document.body.classList.remove("container");
};

const wrapper = document.querySelector(".wrapper");
const openBtn = document.getElementById("openBtn");
const nextBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    wrapper.classList.add("open");
    openBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "Next"; // Change button text to "Next"
});

nextBtn.addEventListener("click", () => {
    // Redirect to the next page (placeholder URL, replace with your actual page)
    window.location.href = "mygirl.html";
});
