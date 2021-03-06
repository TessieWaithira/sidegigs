from django.conf.urls import url
from . import views
from projects import views as core_views

urlpatterns = [
    url(r'^$', views.project_list, name='project_list'),
    url(r'^project_list/$', views.project_list, name='project_list'),
    url(r'^project/(?P<pk>\d+)/$', views.project_detail, name='project_detail'),
    url(r'^project/(?P<pk>\d+)/edit$', views.project_edit, name='project_edit'),
    url(r'^project_new/$', views.project_new, name='project_new'),
    url(r'^project/(?P<pk>\d+)/$', views.project_apply, name='project_apply'),
    url(r'^project/(?P<pk>\d+)/delete/$', views.project_delete, name='project_delete'),
    url(r'^project/(?P<pk>\d+)/apply/$', views.project_apply, name='project_apply'),
    url(r'^project/(?P<pk>\d+)/subscribe/$', views.project_subscribe, name='project_subscribe'),
    url(r'^accounts/profile/$', views.project_list, name='project_list'),
    url(r'^accounts/register/$', views.register, name='register'),
    url(r'^settings/$', core_views.settings, name='settings'),
    url(r'^settings/password/$', core_views.password, name='password'),
]
