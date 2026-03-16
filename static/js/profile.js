function editProfile() {
    alert('Edit Profile functionality');
}

function viewHistory() {
    alert('View History functionality');
}

function logout() {
    alert('Logged out');
    window.location.href = '/';
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('a[href="/profile"]').classList.add('active');
});