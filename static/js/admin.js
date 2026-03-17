async function loadUsers() {
    try {
        const response = await fetch('/api/users');
        const users = await response.json();
        const ul = document.getElementById('users');
        ul.innerHTML = '';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} - ${user.role}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading users:', error);
    }
}

document.getElementById('doctor-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        name: document.getElementById('doctor-name').value,
        specialty: document.getElementById('doctor-specialty').value
    };
    try {
        const response = await fetch('/api/doctors', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Doctor added!');
            // Optionally reload doctors or something
        } else {
            alert('Error adding doctor');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

function manageUsers() {
    alert('Manage Users functionality');
}

function viewReports() {
    alert('View Reports functionality');
}

function systemSettings() {
    alert('System Settings functionality');
}

window.onload = function() {
    loadUsers();
    document.querySelector('a[href="/admin"]').classList.add('active');
};