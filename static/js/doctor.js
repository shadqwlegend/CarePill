async function loadDoctors() {
    try {
        const response = await fetch('/api/doctors');
        const doctors = await response.json();
        const ul = document.getElementById('patients'); // reusing
        ul.innerHTML = '';
        doctors.forEach(doctor => {
            const li = document.createElement('li');
            li.textContent = `${doctor.name} - Specialty: ${doctor.specialty}`;
            ul.appendChild(li);
        });
    } catch (error) {
        console.error('Error loading doctors:', error);
    }
}

function viewPatients() {
    alert('View Patients functionality');
}

function scheduleAppointment() {
    alert('Schedule Appointment functionality');
}

function prescribeMedication() {
    alert('Prescribe Medication functionality');
}

window.onload = function() {
    loadDoctors();
    document.querySelector('a[href="/doctor"]').classList.add('active');
};