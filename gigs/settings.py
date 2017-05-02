import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SECRET_KEY = 'lmm!v0*p3c9jy4mx(o^gxf58%d^8ucpjfj*n)6aa66$nq9%$$e'
DEBUG = True

ALLOWED_HOSTS = []



INSTALLED_APPS = [
    'django_extensions',
    'social_django',
    'projects',
    'django.contrib.sites',
    'django.contrib.admin',
    'django.contrib.auth',
    'allauth',
    'allauth.account',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'social_django.middleware.SocialAuthExceptionMiddleware',
]

SOCIAL_AUTH_GITHUB_KEY = 'd107cfe405f42f2526a9'
SOCIAL_AUTH_GITHUB_SECRET = '72d9eca130288422ce54444267b13ac135d1e632'
SOCIAL_AUTH_TWITTER_KEY = 'DZS57YgkJVAsU5meCXvTlCVao'
SOCIAL_AUTH_TWITTER_SECRET = 'RNrL9GJwEHHFo5zOWR00AwcUjY3Pm3QJ1hYQirjOScWO8P2n1R'

AUTHENTICATION_BACKENDS = (
    'social_core.backends.github.GithubOAuth2',
    'social_core.backends.twitter.TwitterOAuth',
    'social_core.backends.facebook.FacebookOAuth2',

    'django.contrib.auth.backends.ModelBackend',
)

ROOT_URLCONF = 'gigs.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ["templates"],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',

                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',

            ],
        },
    },
]

WSGI_APPLICATION = 'gigs.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'Africa/Accra'

USE_I18N = True

USE_L10N = True

USE_TZ = True

SITE_ID = 1


STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

import dj_database_url
DATABASES['default'] = dj_database_url.config()

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

ALLOWED_HOSTS = ['*']

DEBUG = True

try:
    from .local_settings import *
except ImportError:
    pass