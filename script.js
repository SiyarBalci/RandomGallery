document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");

    // rastgele resim alan fonksiyon
    function addRandomImages() {
        for (let i = 0; i < 12; i++) { 
            const imageUrl = `https://source.unsplash.com/random/400x200?${i}`;

            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;

            gallery.appendChild(imgElement);
        }
    }

    addRandomImages();
});
