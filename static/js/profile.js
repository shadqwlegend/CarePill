// CarePill Profile Management JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize profile page
    initializeProfile();

    // Set active navigation
    document.querySelector('a[href="/profile"]').classList.add('active');
});

// Initialize profile functionality
function initializeProfile() {
    // Load user profile data (in a real app, this would be from an API)
    loadProfileData();

    // Initialize tab functionality
    initializeTabs();

    // Initialize profile actions
    initializeProfileActions();
}

// Load profile data from localStorage or API
function loadProfileData() {
    // In a real application, this would fetch data from an API
    // For now, we'll use localStorage or default values

    const profileData = {
        name: localStorage.getItem('profile_name') || 'John Doe',
        email: localStorage.getItem('profile_email') || 'john.doe@example.com',
        role: localStorage.getItem('profile_role') || 'Patient',
        avatar: localStorage.getItem('profile_avatar') || 'https://via.placeholder.com/120x120/00ffff/000000?text=JD'
    };

    // Update profile display
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-email').textContent = profileData.email;
    document.getElementById('profile-role').textContent = profileData.role;
    document.getElementById('profile-pic').src = profileData.avatar;

    // Update personal info tab
    document.getElementById('full-name').textContent = profileData.name;
}

// Initialize tab functionality
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('onclick').match(/'([^']+)'/)[1];

            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');
            document.getElementById(tabName + '-tab').classList.add('active');
        });
    });
}

// Initialize profile actions
function initializeProfileActions() {
    // Add event listeners for profile actions
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-danger')) {
            if (!confirm('Are you sure you want to perform this action?')) {
                e.preventDefault();
            }
        }
    });
}

// Tab switching functions
function showTab(tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Hide all tabs
    tabContents.forEach(content => content.classList.remove('active'));
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show selected tab
    document.getElementById(tabName + '-tab').classList.add('active');
    event.target.classList.add('active');
}

// Profile management functions
function editProfile() {
    // Create edit modal or redirect to edit page
    const editModal = createEditModal();
    document.body.appendChild(editModal);

    // Show modal
    editModal.style.display = 'block';

    // Focus on first input
    setTimeout(() => {
        editModal.querySelector('input').focus();
    }, 100);
}

function createEditModal() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Edit Profile</h3>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <form id="edit-profile-form">
                    <div class="form-group">
                        <label for="edit-name">Full Name</label>
                        <input type="text" id="edit-name" value="${document.getElementById('profile-name').textContent}" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-email">Email</label>
                        <input type="email" id="edit-email" value="${document.getElementById('profile-email').textContent}" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-phone">Phone</label>
                        <input type="tel" id="edit-phone" value="${document.getElementById('phone').textContent}" required>
                    </div>
                    <div class="form-group">
                        <label for="edit-address">Address</label>
                        <textarea id="edit-address" required>${document.getElementById('address').textContent}</textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="closeModal()">Cancel</button>
                <button class="btn-primary" onclick="saveProfile()">Save Changes</button>
            </div>
        </div>
    `;

    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
        }
        .modal-content {
            background-color: var(--bg-primary);
            margin: 5% auto;
            padding: 0;
            border-radius: var(--border-radius-lg);
            width: 90%;
            max-width: 500px;
            box-shadow: var(--shadow-lg);
        }
        .modal-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .modal-header h3 {
            margin: 0;
            color: var(--text-primary);
        }
        .modal-close {
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-secondary);
        }
        .modal-body {
            padding: 1.5rem;
        }
        .modal-footer {
            padding: 1.5rem;
            border-top: 1px solid var(--border-color);
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--text-primary);
        }
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid var(--border-color);
            border-radius: var(--border-radius);
            font-size: 1rem;
            font-family: inherit;
        }
        .form-group textarea {
            resize: vertical;
            min-height: 80px;
        }
    `;
    document.head.appendChild(style);

    // Add close functionality
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    return modal;
}

function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

function saveProfile() {
    const form = document.getElementById('edit-profile-form');
    if (!form.checkValidity()) {
        alert('Please fill in all required fields correctly.');
        return;
    }

    // Get form values
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    const address = document.getElementById('edit-address').value;

    // Save to localStorage (in a real app, this would be an API call)
    localStorage.setItem('profile_name', name);
    localStorage.setItem('profile_email', email);

    // Update display
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-email').textContent = email;
    document.getElementById('full-name').textContent = name;
    document.getElementById('phone').textContent = phone;
    document.getElementById('address').textContent = address;

    // Close modal
    closeModal();

    // Show success message
    showNotification('Profile updated successfully!', 'success');
}

function viewSettings() {
    // Navigate to settings tab
    showTab('personal');
    document.querySelector('.tab-btn[onclick*="personal"]').scrollIntoView({ behavior: 'smooth' });
}

// Appointment management functions
function rescheduleAppointment(id) {
    alert(`Reschedule appointment ${id} functionality would open a calendar picker.`);
}

function cancelAppointment(id) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
        alert(`Appointment ${id} cancelled.`);
        // In a real app, this would make an API call
    }
}

function viewSummary(id) {
    alert(`View appointment summary ${id} functionality would open a detailed view.`);
}

// Prescription management functions
function requestRefill(id) {
    if (confirm('Request refill for this prescription?')) {
        alert(`Refill requested for prescription ${id}.`);
        // In a real app, this would make an API call
    }
}

function viewDetails(id) {
    alert(`View prescription details ${id} functionality would open a detailed view.`);
}

// Reminder management functions
function addReminder() {
    alert('Add reminder functionality would open a form to create new reminders.');
}

function manageReminders() {
    showTab('reminders');
}

// Avatar management
function changeAvatar() {
    // Create file input for avatar upload
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageUrl = e.target.result;
                document.getElementById('profile-pic').src = imageUrl;
                localStorage.setItem('profile_avatar', imageUrl);
                showNotification('Profile picture updated!', 'success');
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: var(--border-radius);
            color: var(--bg-primary);
            font-weight: 500;
            z-index: 1001;
            animation: slideIn 0.3s ease;
        }
        .notification.success {
            background: #10b981;
        }
        .notification.error {
            background: #ef4444;
        }
        .notification.info {
            background: var(--primary-color);
        }
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        // Clear local storage
        localStorage.clear();

        // Show logout message
        showNotification('Logged out successfully', 'info');

        // Redirect to home after a short delay
        setTimeout(() => {
            window.location.href = '/';
        }, 1000);
    }
}

// Add slideOut animation
const slideOutStyle = document.createElement('style');
slideOutStyle.textContent = `
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(slideOutStyle);