document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simulación de validación (MVP): Acepta cualquier login básico
        if (email.includes('@') && password.length >= 4) {
            // Ocultar error si estaba visible
            errorMessage.classList.add('hidden');
            
            // Simular inicio de sesión guardando datos temporales
            localStorage.setItem('userName', email.split('@')[0].toUpperCase());
            localStorage.setItem('userRole', 'Abogado Senior');
            
            // Redirigir al panel principal (Dashboard)
            window.location.href = 'dashboard.html';
        } else {
            // Mostrar error
            errorMessage.classList.remove('hidden');
        }
    });
});