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

document.getElementById('delivery-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Delivery status updated!');
});

window.onload = function() {
    loadDeliveries();
    document.querySelector('a[href="/delivery"]').classList.add('active');
};