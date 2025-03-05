console.log('Script working');

const slider = document.querySelector(".slider");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    const offset = -currentIndex * 310; // 300px (card width) + 10px (gap)
    slider.style.transform = `translateX(${offset}px)`;
}
