document.addEventListener("DOMContentLoaded", function () {
    let options = {
        threshold: 0.1
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    document.querySelectorAll('.fade-in, .slide-in, .zoom-in').forEach(element => {
        observer.observe(element);
    });

    // Funcionalidad para mostrar las imágenes de tatuajes en tamaño grande
    const tattooImages = document.querySelectorAll('.grid img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeModal = document.getElementById('close-modal');

    tattooImages.forEach(image => {
        image.addEventListener('click', () => {
            modalImg.src = image.src;
            modal.classList.remove('hidden');
            modal.classList.add('show');
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
                modal.classList.remove('show');
    });

    modal.addEventListener('click', (e) => {
        if (e.target !== modalImg && e.target !== closeModal) {
            modal.classList.add('hidden');
            modal.classList.remove('show');
        }
    });

    // Asegurar que el video en la sección "Sobre Mi" no se expanda automáticamente a pantalla completa en dispositivos móviles
    const sobreMiVideo = document.querySelector('.sobre-mi-video video');

    sobreMiVideo.addEventListener('webkitbeginfullscreen', (e) => {
        e.preventDefault();
    });

    sobreMiVideo.addEventListener('fullscreenchange', (e) => {
        if (document.fullscreenElement === sobreMiVideo || document.webkitFullscreenElement === sobreMiVideo) {
            document.exitFullscreen();
        }
    });
});