async function loadPatients() {
    try {
        const response = await fetch('/api/patients');
        const patients = await response.json();
        const ul = document.getElementById('appointment-list'); // reusing for patients
        ul.innerHTML = '';
        patients.forEach(patient => {
            const li = document.createElement('li');
            li.textContent = `${patient.name} - Age: ${patient.age}, Condition: ${patient.condition}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading patients:', error);
    }
}

document.getElementById('patient-registration').addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = {
        name: document.getElementById('name').value,
        age: 0,  // default
        condition: 'New'
    };
    try {
        const response = await fetch('/api/patients', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });
        if (response.ok) {
            alert('Patient registered!');
            loadPatients();
        } else {
            alert('Error registering patient');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

window.onload = function() {
    loadPatients();
    document.querySelector('a[href="/patient"]').classList.add('active');
};