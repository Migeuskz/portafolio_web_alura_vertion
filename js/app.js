document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.content_navbar');

    // Detecta el desplazamiento
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Si el usuario ha hecho scroll, añade la clase 'scrolled'
            navbar.classList.add('scrolled');
        } else {
            // Si el usuario vuelve a la parte superior, remueve la clase 'scrolled'
            navbar.classList.remove('scrolled');
        }
    });
});
