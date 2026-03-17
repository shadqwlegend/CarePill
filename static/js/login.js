document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            // Redirect based on role
            if (result.role === 'admin') {
                window.location.href = '/admin';
            } else if (result.role === 'doctor') {
                window.location.href = '/doctor';
            } else if (result.role === 'patient') {
                window.location.href = '/patient';
            }
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="/login"]').classList.add('active');
});