document.getElementById('register-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm').value;
    if (password !== confirm) {
        alert('Passwords do not match');
        return;
    }
    // Dummy register
    if (username && email && password) {
        alert('Registration successful!');
        window.location.href = '/login';
    } else {
        alert('Please fill all fields');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="/register"]').classList.add('active');
});