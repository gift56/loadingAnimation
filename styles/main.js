const circle = document.querySelector('.circle');
const dots = circle.getAttribute('dots');
const points = "";
const rotate = 360 / dots;

for (let i = 0; i < dot; i++) {
    points += `<div class="point" style="--i: ${i};--rot:${rotate}"></div>`;
    circle.innerHTML = points
}