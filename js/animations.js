document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.nav-bar');
    
    // Lista de todas las secciones a observar
    const sections = [
        { id: '.hero-section', class: 'hero-active' },
        { id: '#sobre-mi', class: 'sobre-mi-active' },
        { id: '#portfolio', class: 'portfolio-active' },
        { id: '#contacto', class: 'contacto-active' }
    ];

    const observerOptions = {
        threshold: 0.4 // Cambia cuando casi la mitad de la sección es visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quitamos todas las clases de la Nav
                sections.forEach(s => navbar.classList.remove(s.class));
                
                // Buscamos cuál es la sección actual y aplicamos su clase
                const currentSection = sections.find(s => entry.target.matches(s.id));
                if (currentSection) {
                    navbar.classList.add(currentSection.class);
                }
            }
        });
    }, observerOptions);

    // Activamos el observador para cada sección
    sections.forEach(s => {
        const el = document.querySelector(s.id);
        if (el) observer.observe(el);
    });
});