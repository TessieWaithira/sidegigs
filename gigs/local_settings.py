import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))



DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'gigs',
        'USER': 'wambugu',
        'PASSWORD': 'geek4444',
        'HOST': 'localhost',
        'PORT': '',
    }
}
DEBUG = True