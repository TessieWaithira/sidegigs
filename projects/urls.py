from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^project_list/', views.project_list, name='project_list'),
    url(r'^project_new/', views.project_new, name='project_new'),
]