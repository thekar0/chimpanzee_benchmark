# Setting Up and Running ChimpTest Locally

# 1. Create a Virtual Environment and Install Django
```bash
python -m venv venv
```
### Activate the virtual environment

### On Windows
```bash
venv\Scripts\activate
```
### On macOS/Linux
```bash
source venv/bin/activate
```
## Install Django
```bash
pip install django
```

# 2. Apply Migrations

### Use the following commands
```bash
python manage.py migrate
```

# 3. Run the Django Development Server

### Use one of the following commands
```bash
python manage.py runserver
```
# or
```bash
python3 manage.py runserver
```
# 4. Open the Web App

Paste this link into your browser:

# http://127.0.0.1:8000/mainpage/