const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        // Simple mock login
        localStorage.setItem('user', JSON.stringify({ email, loggedIn: true }));
        alert("Login Successful!");
        window.location.href = 'index.html';
    });
}