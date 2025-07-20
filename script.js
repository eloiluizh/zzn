// --- Dicionário de Traduções ---
const translations = {
    pt: {
        nav_projects: "projetos",
        nav_about: "sobre",
        nav_contact: "contato",
        animated_text_1: "creative developer",
        animated_text_2: "digital innovator",
        animated_text_3: "problem solver",
        hero_subtitle: "Tenho 16 anos e estou construindo o futuro através do código, design e inovação digital.",
        hero_cta: "Vamos Conversar",
        projects_title: "Meus Projetos",
        about_title: "Sobre Mim",
        contact_title: "Contato",
        footer_quote: '"Eh os guri do inter" - Igordão'
    },
    en: {
        nav_projects: "projects",
        nav_about: "about",
        nav_contact: "contact",
        animated_text_1: "creative developer",
        animated_text_2: "digital innovator",
        animated_text_3: "problem solver",
        hero_subtitle: "I'm 16 years old and building the future through code, design, and digital innovation.",
        hero_cta: "Let's Talk",
        projects_title: "My Projects",
        about_title: "About Me",
        contact_title: "Contact",
        footer_quote: '"It\'s the Inter boys" - Igordão'
    }
};

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

    // --- Lógica da Animação de Texto no Hero ---
    const animatedTextEl = document.getElementById('animated-hero-text');
    const animatedTexts = [
        translations.pt.animated_text_1,
        translations.pt.animated_text_2,
        translations.pt.animated_text_3
    ];
    let textIndex = 0;
    setInterval(() => {
        textIndex = (textIndex + 1) % animatedTexts.length;
        // Atualiza o texto baseado no idioma atual
        const currentLang = localStorage.getItem('language') || 'pt';
        const key = `animated_text_${textIndex + 1}`;
        animatedTextEl.textContent = translations[currentLang][key];
    }, 4000); // 4 segundos, corresponde à duração da animação CSS

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

    // --- Inicialização do Idioma ---
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);

    console.log("Já que ta fuçando no codigo, aproveita e me segue no insta @oluizzn");
});

// --- Função de Tradução (Atualizada para incluir animação) ---
const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            elem.innerHTML = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);

    document.querySelector('.lang-selector .active').classList.remove('active');
    document.querySelector(`.lang-selector .lang-${lang}`).classList.add('active');
    
    // Sincroniza o texto animado imediatamente ao trocar de idioma
    const animatedTextEl = document.getElementById('animated-hero-text');
    const currentKey = animatedTextEl.getAttribute('data-key');
    animatedTextEl.textContent = translations[lang][currentKey];
};