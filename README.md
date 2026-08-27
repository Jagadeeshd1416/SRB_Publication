# SRB Publication Full-Stack Website

React + Vite frontend and Django REST backend.

## Features
- Contact enquiries saved to database.
- Publish With Us submissions saved to database.
- PDF/DOC/DOCX manuscript upload up to 10 MB.
- Unique submission ID.
- Django Admin for enquiries, submissions, status changes and publications.
- SMTP notification to srbpublication@gmail.com when configured.
- Author confirmation email when SMTP is configured.

## Backend (Windows)
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
Admin: http://127.0.0.1:8000/admin/

## Frontend
Open another terminal:
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```
Frontend: http://localhost:5173/

## Email
Set Gmail SMTP values in backend/.env. Use a Gmail App Password, not your normal Gmail password. If SMTP is not configured, forms are still stored and visible in Admin.

## Production
Use PostgreSQL, HTTPS, DEBUG=False, private object storage for manuscripts, malware scanning, CAPTCHA/rate limiting, backups, authentication for author dashboards, and legal/ethics pages.
