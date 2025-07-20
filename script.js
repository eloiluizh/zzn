// --- Dicionário de Traduções ---
const translations = {
    pt: {
        nav_projects: "projetos",
        nav_about: "sobre",
        nav_contact: "contato",
        hero_title: "Explorando o universo da tecnologia e design.",
        hero_subtitle: "Tenho 16 anos e estou apenas começando a arar a terra onde, no futuro, irei plantar minhas ideias.",
        hero_cta: "Vamos Conversar",
        projects_title: "Meus Projetos",
        about_title: "Sobre Mim",
        contact_title: "Contato",
        footer_quote: '"Eh os guri do inter" - Igordão'
    },
    en: {
        nav_projects: "projects",
        nav_about: "about",
        nav_contact: "contact me",
        hero_title: "Exploring the universe of technology and design.",
        hero_subtitle: "I'm 16 years old and just starting to plow the land where, in the future, I will plant my ideas.",
        hero_cta: "Let's Talk",
        projects_title: "My Projects",
        about_title: "About Me",
        contact_title: "Contact",
        footer_quote: '"It\'s the Inter boys" - Igordão'
    }
};

// --- Lógica de Tradução ---
const setLanguage = (lang) => {
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.innerHTML = translations[lang][key];
    });
    // Salva a preferência de idioma do usuário
    localStorage.setItem('language', lang);

    // Atualiza a classe 'active' no seletor de idioma
    document.querySelector('.lang-selector .active').classList.remove('active');
    document.querySelector(`.lang-selector .lang-${lang}`).classList.add('active');
};

// --- Lógica da Animação da Logo ---
const footerLogo = document.getElementById('footer-logo');
const headerLogo = document.getElementById('header-logo');

footerLogo.addEventListener('mouseover', () => {
    headerLogo.classList.add('shine-active');
});

footerLogo.addEventListener('mouseout', () => {
    // Remove a classe após a animação terminar (2s) para poder ser reativada
    setTimeout(() => {
        headerLogo.classList.remove('shine-active');
    }, 2000);
});

// --- Inicialização da Página ---
document.addEventListener('DOMContentLoaded', () => {
    // Verifica se já existe um idioma salvo, senão usa 'pt' como padrão
    const savedLang = localStorage.getItem('language') || 'pt';
    setLanguage(savedLang);

    // Easter egg mantido :)
    console.log("Já que ta fuçando no codigo, aproveita e me segue no insta @oluizzn");
});