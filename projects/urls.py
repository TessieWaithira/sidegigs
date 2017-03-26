from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^project_list/$', views.project_list, name='project_list'),
    url(r'^project/(?P<pk>\d+)/$', views.project_detail, name='project_detail'),
    url(r'^project/(?P<pk>\d+)/edit$', views.project_edit, name='project_edit'),
    url(r'^project_new/$', views.project_new, name='project_new'),
    url(r'^project/(?P<pk>\d+)/delete/$', views.project_delete, name='project_delete'),
]
