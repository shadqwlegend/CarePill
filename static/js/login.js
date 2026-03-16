document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Dummy login
    if (username && password) {
        alert('Login successful!');
        window.location.href = '/profile';
    } else {
        alert('Please enter username and password');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="/login"]').classList.add('active');
});