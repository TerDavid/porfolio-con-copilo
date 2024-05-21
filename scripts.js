

document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-images img");
    const totalImages = images.length;

    function showNextImage() {
        images[currentIndex].classList.remove("visible");
        currentIndex = (currentIndex + 1) % totalImages;
        images[currentIndex].classList.add("visible");
    }

    images[currentIndex].classList.add("visible");
    setInterval(showNextImage, 5000); // Cambia la imagen cada 5 segundos

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function() {
            card.classList.toggle("clicked");
        });
    });
});








