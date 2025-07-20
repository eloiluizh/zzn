document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica do Menu Mobile ---
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
    // Fecha o menu ao clicar em um link
    mainNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-item')) {
            document.body.classList.remove('nav-open');
        }
    });

    // --- Lógica do Efeito de Glow nos Cards ---
    const cards = document.querySelectorAll('.project-card, .skill-item, .contact-method');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
    });

    console.log("Já que ta fuçando no codigo, aproveita e me segue no insta @oluizzn");
});