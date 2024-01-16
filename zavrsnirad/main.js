document.addEventListener("DOMContentLoaded", function () {
  const background = document.querySelector(".container");

  document.addEventListener("mousemove", function (e) {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    const moveX = mouseX * 10;
    const moveY = mouseY * 10;

    background.style.backgroundPosition = `${moveX}px ${moveY}px`;
  });
});
