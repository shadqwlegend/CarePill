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