// Dil çevirileri
const translations = {
    en: {
        about: "ABOUT ME",
        aboutText: "A passionate student exploring the endless possibilities of technology and software development.",
        contact: "CONTACT",
        contactText: "Feel free to reach out for collaborations, questions, or just to say hello. I'm always open to discussing new projects and opportunities.",
        university: "I am student at Politecnico di Torino",
        viewProjects: "View My Projects →"
    },
    tr: {
        about: "HAKKIMDA",
        aboutText: "Teknoloji ve yazılım geliştirmenin sonsuz olanaklarını keşfeden tutkulu bir öğrenci.",
        contact: "İLETİŞİM",
        contactText: "İşbirliği, sorular veya sadece merhaba demek için iletişime geçebilirsiniz. Yeni projeler ve fırsatları görüşmeye her zaman açığım.",
        university: "Politecnico di Torino'da öğrenciyim",
        viewProjects: "Projelerimi Görüntüle →"
    },
    it: {
        about: "SU DI ME",
        aboutText: "Uno studente appassionato che esplora le infinite possibilità della tecnologia e dello sviluppo software.",
        contact: "CONTATTO",
        contactText: "Non esitare a contattarmi per collaborazioni, domande o semplicemente per un saluto. Sono sempre aperto a discutere nuovi progetti e opportunità.",
        university: "Sono studente al Politecnico di Torino",
        viewProjects: "Visualizza i Miei Progetti →"
    }
};

// Dil değiştirme fonksiyonu
function changeLang(lang) {
    // Butonları güncelle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

    // Metinleri güncelle
    document.querySelectorAll('.footer-section')[0].querySelector('h2').textContent = translations[lang].about;
    document.querySelectorAll('.footer-section')[0].querySelector('p').textContent = translations[lang].aboutText;
    document.querySelectorAll('.footer-section')[1].querySelector('h2').textContent = translations[lang].contact;
    document.querySelectorAll('.footer-section')[1].querySelector('p').textContent = translations[lang].contactText;
    document.querySelector('.email').textContent = translations[lang].university;
    document.querySelector('.project-button').textContent = translations[lang].viewProjects;
}

// Click event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.onclick = () => changeLang(btn.getAttribute('data-lang'));
});

document.querySelectorAll('.email-reveal').forEach(container => {
    const emailElement = container.querySelector('.email');
    
    // Sadece Safari mobile için touch fix
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent) && 'ontouchstart' in window) {
        const parentSection = container.closest('.about-section') || container.closest('.contact-section');
        if (parentSection) {
            // Safari için gerekli stil ayarları
            parentSection.style.webkitTouchCallout = 'none';
            parentSection.style.webkitUserSelect = 'none';
            
            parentSection.addEventListener('touchstart', (e) => {
                e.preventDefault();
                
                // Diğer açık olanları kapat
                document.querySelectorAll('.email').forEach(el => {
                    if (el !== emailElement) {
                        el.style.opacity = '0';
                        el.style.transform = 'translateY(20px)';
                    }
                });
                
                // Mevcut elementi aç/kapat
                const currentlyVisible = window.getComputedStyle(emailElement).opacity === '1';
                emailElement.style.opacity = currentlyVisible ? '0' : '1';
                emailElement.style.transform = currentlyVisible ? 'translateY(20px)' : 'translateY(0)';
            });
        }
    }
}); 