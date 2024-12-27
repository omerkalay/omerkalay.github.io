const darkModeToggle = document.getElementById('darkModeToggle');

// Varsayılan olarak dark mode aktif
if (localStorage.getItem('darkMode') === null) {
    localStorage.setItem('darkMode', 'enabled');
}

// Sayfa yüklendiğinde kullanıcının tercihini kontrol et
if (localStorage.getItem('darkMode') === 'enabled') {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
} else {
    document.documentElement.setAttribute('data-theme', 'light');
    darkModeToggle.checked = false;
}

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('darkMode', 'disabled');
    }
}); 