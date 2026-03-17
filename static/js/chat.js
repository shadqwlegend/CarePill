// Simple chat functionality
let messages = [
    { sender: 'Doctor', text: 'Hello! How are you feeling today?', time: '10:00 AM' },
    { sender: 'Patient', text: 'Hi Doctor, I have a headache.', time: '10:05 AM' }
];

function loadMessages() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    messages.forEach(msg => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${msg.sender.toLowerCase()}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <strong>${msg.sender}:</strong> ${msg.text}
                <span class="message-time">${msg.time}</span>
            </div>
        `;
        chatMessages.appendChild(messageDiv);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('message-input');
    const text = input.value.trim();
    if (text) {
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        messages.push({ sender: 'Patient', text: text, time: time });
        input.value = '';
        loadMessages();
    }
});

document.getElementById('message-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});

window.onload = function() {
    loadMessages();
    document.querySelector('a[href="/chat"]').classList.add('active');
};