from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# In-memory data for demo
users = [
    {'id': 1, 'name': 'Admin User', 'role': 'admin'},
    {'id': 2, 'name': 'Dr. Smith', 'role': 'doctor'},
    {'id': 3, 'name': 'John Doe', 'role': 'patient'}
]

patients = [
    {'id': 1, 'name': 'John Doe', 'age': 30, 'condition': 'Flu'},
    {'id': 2, 'name': 'Jane Doe', 'age': 25, 'condition': 'Cold'}
]

doctors = [
    {'id': 1, 'name': 'Dr. Smith', 'specialty': 'General'},
    {'id': 2, 'name': 'Dr. Johnson', 'specialty': 'Cardiology'}
]

prescriptions = [
    {'id': 1, 'patient_id': 1, 'doctor_id': 1, 'medication': 'Paracetamol', 'dosage': '500mg'},
    {'id': 2, 'patient_id': 2, 'doctor_id': 2, 'medication': 'Cough Syrup', 'dosage': '10ml'}
]

deliveries = [
    {'id': 1, 'prescription_id': 1, 'status': 'Delivered'},
    {'id': 2, 'prescription_id': 2, 'status': 'In Transit'}
]

reminders = [
    {'id': 1, 'patient_id': 1, 'message': 'Take medication at 8 PM'},
    {'id': 2, 'patient_id': 2, 'message': 'Doctor appointment tomorrow'}
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/patient')
def patient():
    return render_template('patient.html')

@app.route('/doctor')
def doctor():
    return render_template('doctor.html')

@app.route('/delivery')
def delivery():
    return render_template('delivery.html')

@app.route('/prescription')
def prescription():
    return render_template('prescription.html')

@app.route('/reminder')
def reminder():
    return render_template('reminder.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/matching')
def matching():
    return render_template('index.html')  # Matching redirects to home for now

@app.route('/showcase')
def showcase():
    return render_template('index.html')  # Showcase redirects to home for now

@app.route('/mentor')
def mentor():
    return render_template('index.html')  # Mentor redirects to home for now

@app.route('/chat')
def chat():
    return render_template('chat.html')

# API endpoints
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

@app.route('/api/patients', methods=['GET'])
def get_patients():
    return jsonify(patients)

@app.route('/api/patients', methods=['POST'])
def add_patient():
    data = request.get_json()
    new_id = max(p['id'] for p in patients) + 1 if patients else 1
    new_patient = {
        'id': new_id,
        'name': data['name'],
        'age': data.get('age', 0),
        'condition': data.get('condition', 'New')
    }
    patients.append(new_patient)
    return jsonify(new_patient), 201

@app.route('/api/doctors', methods=['GET'])
def get_doctors():
    return jsonify(doctors)

@app.route('/api/doctors', methods=['POST'])
def add_doctor():
    data = request.get_json()
    new_id = max(d['id'] for d in doctors) + 1 if doctors else 1
    new_doctor = {
        'id': new_id,
        'name': data['name'],
        'specialty': data.get('specialty', 'General')
    }
    doctors.append(new_doctor)
    return jsonify(new_doctor), 201

@app.route('/api/prescriptions', methods=['GET'])
def get_prescriptions():
    return jsonify(prescriptions)

@app.route('/api/prescriptions', methods=['POST'])
def add_prescription():
    data = request.get_json()
    new_id = max(p['id'] for p in prescriptions) + 1 if prescriptions else 1
    new_prescription = {
        'id': new_id,
        'patient_id': data['patient_id'],
        'doctor_id': data['doctor_id'],
        'medication': data['medication'],
        'dosage': data['dosage']
    }
    prescriptions.append(new_prescription)
    return jsonify(new_prescription), 201

@app.route('/api/deliveries', methods=['GET'])
def get_deliveries():
    return jsonify(deliveries)

@app.route('/api/deliveries', methods=['POST'])
def add_delivery():
    data = request.get_json()
    new_id = max(d['id'] for d in deliveries) + 1 if deliveries else 1
    new_delivery = {
        'id': new_id,
        'prescription_id': data['prescription_id'],
        'status': data.get('status', 'Pending')
    }
    deliveries.append(new_delivery)
    return jsonify(new_delivery), 201

@app.route('/api/reminders', methods=['GET'])
def get_reminders():
    return jsonify(reminders)

@app.route('/api/reminders', methods=['POST'])
def add_reminder():
    data = request.get_json()
    new_id = max(r['id'] for r in reminders) + 1 if reminders else 1
    new_reminder = {
        'id': new_id,
        'patient_id': data['patient_id'],
        'message': data['message']
    }
    reminders.append(new_reminder)
    return jsonify(new_reminder), 201

@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    # Simple check: if username is 'admin' and password 'admin', etc.
    if username == 'admin' and password == 'admin':
        return jsonify({'message': 'Login successful', 'role': 'admin'}), 200
    elif username == 'doctor' and password == 'doctor':
        return jsonify({'message': 'Login successful', 'role': 'doctor'}), 200
    elif username == 'patient' and password == 'patient':
        return jsonify({'message': 'Login successful', 'role': 'patient'}), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401

if __name__ == '__main__':
    app.run(debug=True)