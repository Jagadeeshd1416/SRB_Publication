from pathlib import Path
import os
from dotenv import load_dotenv
BASE_DIR=Path(__file__).resolve().parent.parent
load_dotenv(BASE_DIR/".env")
SECRET_KEY=os.getenv("SECRET_KEY","dev-only-change-me")
DEBUG=os.getenv("DEBUG","True").lower()=="true"
ALLOWED_HOSTS=[x.strip() for x in os.getenv("ALLOWED_HOSTS","127.0.0.1,localhost").split(",") if x.strip()]
INSTALLED_APPS=["django.contrib.admin","django.contrib.auth","django.contrib.contenttypes","django.contrib.sessions","django.contrib.messages","django.contrib.staticfiles","corsheaders","rest_framework","publishing"]
MIDDLEWARE=["corsheaders.middleware.CorsMiddleware","django.middleware.security.SecurityMiddleware","django.contrib.sessions.middleware.SessionMiddleware","django.middleware.common.CommonMiddleware","django.middleware.csrf.CsrfViewMiddleware","django.contrib.auth.middleware.AuthenticationMiddleware","django.contrib.messages.middleware.MessageMiddleware","django.middleware.clickjacking.XFrameOptionsMiddleware"]
ROOT_URLCONF="config.urls"
TEMPLATES=[{"BACKEND":"django.template.backends.django.DjangoTemplates","DIRS":[],"APP_DIRS":True,"OPTIONS":{"context_processors":["django.template.context_processors.request","django.contrib.auth.context_processors.auth","django.contrib.messages.context_processors.messages"]}}]
WSGI_APPLICATION="config.wsgi.application"; ASGI_APPLICATION="config.asgi.application"
if os.getenv("DB_ENGINE","sqlite").lower()=="postgresql": DATABASES={"default":{"ENGINE":"django.db.backends.postgresql","NAME":os.getenv("DB_NAME","srb_publication"),"USER":os.getenv("DB_USER","postgres"),"PASSWORD":os.getenv("DB_PASSWORD",""),"HOST":os.getenv("DB_HOST","127.0.0.1"),"PORT":os.getenv("DB_PORT","5432")}}
else: DATABASES={"default":{"ENGINE":"django.db.backends.sqlite3","NAME":BASE_DIR/os.getenv("DB_NAME","db.sqlite3")}}
AUTH_PASSWORD_VALIDATORS=[]
LANGUAGE_CODE="en-us"; TIME_ZONE="Asia/Kolkata"; USE_I18N=True; USE_TZ=True
STATIC_URL="static/"; STATIC_ROOT=BASE_DIR/"staticfiles"; MEDIA_URL="/media/"; MEDIA_ROOT=BASE_DIR/"media"
DEFAULT_AUTO_FIELD="django.db.models.BigAutoField"
CORS_ALLOWED_ORIGINS=[x.strip() for x in os.getenv("CORS_ALLOWED_ORIGINS","http://localhost:5173,http://127.0.0.1:5173").split(",") if x.strip()]
REST_FRAMEWORK={"DEFAULT_PERMISSION_CLASSES":["rest_framework.permissions.AllowAny"]}
EMAIL_BACKEND=os.getenv("EMAIL_BACKEND","django.core.mail.backends.smtp.EmailBackend"); EMAIL_HOST=os.getenv("EMAIL_HOST","smtp.gmail.com"); EMAIL_PORT=int(os.getenv("EMAIL_PORT","587")); EMAIL_USE_TLS=os.getenv("EMAIL_USE_TLS","True").lower()=="true"; EMAIL_HOST_USER=os.getenv("EMAIL_HOST_USER",""); EMAIL_HOST_PASSWORD=os.getenv("EMAIL_HOST_PASSWORD",""); DEFAULT_FROM_EMAIL=os.getenv("DEFAULT_FROM_EMAIL",EMAIL_HOST_USER); COMPANY_NOTIFICATION_EMAIL=os.getenv("COMPANY_NOTIFICATION_EMAIL","srbpublication@gmail.com"); MAX_UPLOAD_SIZE=int(os.getenv("MAX_UPLOAD_SIZE","10485760"))
