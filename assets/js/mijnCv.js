// check onclikc button .cv
const cv = document.querySelector('.cv');

cv.addEventListener('click', () => {
    const cvPopup = document.querySelector('.cvPopup');

    cvPopup.style.transform = "translateX(0)";
})

const closePopup = document.querySelector('.closePopup');

closePopup.addEventListener('click', () => {
    const cvPopup = document.querySelector('.cvPopup');

    cvPopup.style.transform = "translateX(100%)";

    // clicking 3 times on the + button of the embedded pdf
})