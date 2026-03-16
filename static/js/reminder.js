async function loadReminders() {
    try {
        const response = await fetch('/api/reminders');
        const reminders = await response.json();
        const ul = document.getElementById('reminders');
        ul.innerHTML = '';
        reminders.forEach(reminder => {
            const li = document.createElement('li');
            li.textContent = `Patient ${reminder.patient_id}: ${reminder.message}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading reminders:', error);
    }
}

document.getElementById('reminder-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        patient_id: 1,  // default
        message: document.getElementById('message').value
    };
    try {
        const response = await fetch('/api/reminders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Reminder set!');
            loadReminders();
        } else {
            alert('Error setting reminder');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

window.onload = function() {
    loadReminders();
    document.querySelector('a[href="/reminder"]').classList.add('active');
};