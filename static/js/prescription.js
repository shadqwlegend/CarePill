async function loadPrescriptions() {
    try {
        const response = await fetch('/api/prescriptions');
        const prescriptions = await response.json();
        const ul = document.getElementById('prescriptions');
        ul.innerHTML = '';
        prescriptions.forEach(prescription => {
            const li = document.createElement('li');
            li.textContent = `Patient ${prescription.patient_id}: ${prescription.medication} - ${prescription.dosage}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading prescriptions:', error);
    }
}

document.getElementById('prescription-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        patient_id: document.getElementById('patient-id').value,
        doctor_id: 1,  // default
        medication: document.getElementById('medication').value,
        dosage: document.getElementById('dosage').value
    };
    try {
        const response = await fetch('/api/prescriptions', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Prescription created!');
            loadPrescriptions();
        } else {
            alert('Error creating prescription');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

window.onload = function() {
    loadPrescriptions();
    document.querySelector('a[href="/prescription"]').classList.add('active');
};