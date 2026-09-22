const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Obtener el tema guardado
const savedTheme = localStorage.getItem('theme');

// Aplicar el tema
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
} else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}

// Actualizar el icono
function updateThemeIcon() {

    const isDark = document.documentElement.classList.contains('dark');

    moonIcon.classList.toggle('hidden', isDark);
    sunIcon.classList.toggle('hidden', !isDark);
}

// Mostrar el icono correcto al cargar
updateThemeIcon();

// Cambiar tema al presionar el botón
themeToggle.addEventListener('click', () => {

    document.documentElement.classList.toggle('dark');

    const isDark = document.documentElement.classList.contains('dark');

    // Guardar preferencia
    localStorage.setItem(
        'theme',
        isDark ? 'dark' : 'light'
    );

    // Actualizar icono
    updateThemeIcon();
});