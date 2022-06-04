const circle = document.querySelector('.circle');
const dots = circle.getAttribute('dots');
let points = "";
let rotate = 360 / dots;

for (let i = 0; i < dots; i++) {
    points += `<div class="point" style="--i: ${i}; --rot: ${rotate}"></div>`;
}
circle.innerHTML = points;