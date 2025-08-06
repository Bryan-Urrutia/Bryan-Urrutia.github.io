const btnNext = document.getElementById("btn-pasar");
const btnPrev = document.getElementById("btn-volver");
const cards = document.querySelectorAll(".thecard");
const containers = document.querySelectorAll(".maincontainer");
let currentIndex = 0;

// Z-index inicial
containers.forEach((container, index) => {
  container.style.zIndex = containers.length - index;
});

btnNext.addEventListener("click", () => {
  if (currentIndex < cards.length) {
    // Desactivar botón al inicio para evitar clicks rápidos
    btnNext.disabled = true;
    btnPrev.disabled = true;

    cards[currentIndex].classList.add("flipped");

    const thisIndex = currentIndex;

    setTimeout(() => {
      containers[thisIndex].style.zIndex = containers.length + thisIndex;

      currentIndex++;

      // Reactivar botones según la nueva posición
      btnPrev.disabled = currentIndex === 0;
      btnNext.disabled = currentIndex === cards.length;
    }, 200);
  }
});

btnPrev.addEventListener("click", () => {
  if (currentIndex > 0) {
    // Desactivar botones para evitar clicks rápidos
    btnPrev.disabled = true;
    btnNext.disabled = true;

    currentIndex--;

    cards[currentIndex].classList.remove("flipped");

    const thisIndex = currentIndex;

    setTimeout(() => {
      containers[thisIndex].style.zIndex = containers.length - thisIndex;

      // Reactivar botones según la nueva posición
      btnPrev.disabled = currentIndex === 0;
      btnNext.disabled = currentIndex === cards.length;
    }, 200);
  }
});
