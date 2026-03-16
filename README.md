# CarePill - Telemedicine Management System

A comprehensive telemedicine platform built with Flask, featuring patient management, doctor consultations, prescription handling, delivery services, and medication reminders.

## Features

- **Admin Dashboard**: Manage users, patients, and system settings
- **Patient Management**: Register and track patient information
- **Doctor Portal**: Handle consultations and prescriptions
- **Delivery Services**: Track medication deliveries
- **Prescription Management**: Create and manage prescriptions
- **Reminder System**: Set medication reminders
- **User Authentication**: Login and registration system
- **Responsive Design**: Mobile-friendly interface

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML5, CSS3, JavaScript
- **Deployment**: Vercel

## Local Development

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python app.py
   ```

3. Open your browser and navigate to `http://127.0.0.1:5000`

## Deployment to Vercel

1. Push your code to a Git repository (GitHub, GitLab, etc.)

2. Connect your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect the Flask app and deploy it

3. The `vercel.json` and `requirements.txt` files are already configured for deployment.

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/patients` - Get all patients
- `POST /api/patients` - Add a new patient
- `GET /api/doctors` - Get all doctors
- `POST /api/doctors` - Add a new doctor
- `GET /api/prescriptions` - Get all prescriptions
- `POST /api/prescriptions` - Add a new prescription
- `GET /api/deliveries` - Get all deliveries
- `POST /api/deliveries` - Add a new delivery

## Project Structure

```
├── app.py                 # Flask application
├── vercel.json           # Vercel deployment configuration
├── requirements.txt      # Python dependencies
├── README.md            # Project documentation
├── static/
│   ├── css/
│   │   └── style.css    # Main stylesheet
│   └── js/
│       ├── admin.js
│       ├── delivery.js
│       ├── doctor.js
│       ├── login.js
│       ├── patient.js
│       ├── prescription.js
│       ├── profile.js
│       └── reminder.js
└── templates/
    ├── index.html
    ├── admin.html
    ├── delivery.html
    ├── doctor.html
    ├── login.html
    ├── patient.html
    ├── prescription.html
    ├── profile.html
    ├── register.html
    └── reminder.html
```

## License

© 2026 CarePill
