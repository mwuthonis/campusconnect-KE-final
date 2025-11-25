# CampusConnect KE

A Django-based event management platform for Kenyan universities, enabling students to discover, register for, and provide feedback on campus events.

## Features

- 🎓 University-specific event management
- 📅 Event registration and tracking
- 💬 Feedback system
- 🔔 Notification system
- 🔍 Advanced event search and filtering
- 🏢 Venue and category management
- 👥 User authentication and authorization

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

### 1 **Python**: 3.8 or higher
```bash
cd backend
```
  - Verify installation: `python --version`..... if no version is seen follow the link below
  - Download from [python.org](https://www.python.org/downloads/)
  

###  2 **pip**: Python package manager (usually comes with Python)
```bash
cd backend
```
  - Verify installation: `pip --version`..... if no version is seen download python

###  3 **Node.js**:Node version 18 
```bash
cd frontend
```
  - Verify installation: `node --version`
  - npm should come with Node.js: `npm --version`..... if no version is seen follow the link below
  - Download from [nodejs.org](https://nodejs.org/)

###  4 **Virtual Environment** (recommended):

```bash
cd backend
```
  - `python -m venv` (built-in) or
  - `virtualenv` package

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/campusconnect-ke.git
cd campusconnect-ke
```

### 2. Backend Setup (Django)

#### Create and Activate Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python3 -m venv venv
source venv/bin/activate
```

#### Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

If `requirements.txt` doesn't exist, install these core packages:
```bash
pip install django
pip install djangorestframework
pip install django-filter
pip install django-cors-headers
pip install python-decouple
pip install pillow
```

#### Configure Environment Variables

Create a `.env` file in the `backend` directory:

```env
# .env - NEVER commit this file to git!
DEBUG=True (A must configurations)
SECRET_KEY=dev-secret-key
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
REDIS_URL=redis://127.0.0.1:6379/0
VITE_API_URL=http://localhost:8000


# Database Configuration (To be used while implementing PostgreSQL)
# DB_NAME=campusconnect_db
# DB_USER=your_db_user
# DB_PASSWORD=your_db_password
# DB_HOST=localhost
# DB_PORT=5432

# Email Configuration (optional)
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USE_TLS=True
# EMAIL_HOST_USER=your-email@gmail.com
# EMAIL_HOST_PASSWORD=your-app-password
```

#### Run Database Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

#### Create Superuser (Admin)

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

#### Run Development Server

```bash
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000/`

## 3. Frontend Setup 

If your project includes a frontend directory:

```bash
cd ../frontend
npm install
npm run dev 
```
or 

```bash
cd ../frontend
npm install
npm start
```

The frontend will typically run on `http://localhost:3000/`

## Project Structure

```
campusconnect-ke/
├── backend/
│   ├── core/
│   │   ├── models.py          # Database models
│   │   ├── views.py           # API views and endpoints
│   │   ├── serializers.py     # Data serializers
│   │   ├── permissions.py     # Custom permissions
│   │   └── utils.py           # Utility functions
│   ├── manage.py
│   └── requirements.txt
├── frontend/                   # (if exists)
│   ├── src/
│   ├── public/
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/register/` - User registration
- `POST /api/login/` - User login

### Events
- `GET /api/events/` - List all events
- `POST /api/events/` - Create event (admin/organizer)
- `GET /api/events/{id}/` - Get event details
- `PUT /api/events/{id}/` - Update event
- `DELETE /api/events/{id}/` - Delete event
- `GET /api/events/search/?q=query` - Search events

### Universities
- `GET /api/universities/` - List universities
- `POST /api/universities/` - Create university

### Venues
- `GET /api/venues/` - List venues
- `POST /api/venues/` - Create venue

### Categories
- `GET /api/categories/` - List categories
- `POST /api/categories/` - Create category

### Registrations
- `GET /api/registrations/` - List registrations
- `POST /api/registrations/` - Register for event

### Feedback
- `GET /api/feedback/` - List feedback
- `POST /api/feedback/` - Submit feedback

### Notifications
- `GET /api/notifications/` - List notifications

## Running Tests

```bash
cd backend
python manage.py test
```

## Common Issues & Troubleshooting

### Port Already in Use
If port 8000 is already in use:
```bash
python manage.py runserver 8080
```

### Module Not Found Errors
Ensure virtual environment is activated and dependencies are installed:
```bash
pip install -r requirements.txt
```

### Database Errors
Delete the database and migrations, then run migrations again:
```bash
rm db.sqlite3
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
python manage.py makemigrations
python manage.py migrate
```

### Static Files Not Loading
```bash
python manage.py collectstatic
```

## Environment-Specific Requirements

### Development
- Django Debug Toolbar (optional): `pip install django-debug-toolbar`
- Faker for test data: `pip install faker`

### Production
- gunicorn: `pip install gunicorn`
- PostgreSQL adapter: `pip install psycopg2-binary`
- WhiteNoise for static files: `pip install whitenoise`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Open an issue on GitHub
- Contact: your-email@example.com

## Acknowledgments

- Django REST Framework
- Django Filter
- All contributors to this project
```