async function loadDeliveries() {
    try {
        const response = await fetch('/api/deliveries');
        const deliveries = await response.json();
        const ul = document.getElementById('deliveries');
        ul.innerHTML = '';
        deliveries.forEach(delivery => {
            const li = document.createElement('li');
            li.textContent = `Prescription ${delivery.prescription_id}: ${delivery.status}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading deliveries:', error);
    }
}

document.getElementById('delivery-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        prescription_id: parseInt(document.getElementById('prescription-id').value),
        status: document.getElementById('status').value
    };
    try {
        const response = await fetch('/api/deliveries', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Delivery added!');
            loadDeliveries();
        } else {
            alert('Error adding delivery');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

window.onload = function() {
    loadDeliveries();
    document.querySelector('a[href="/delivery"]').classList.add('active');
};