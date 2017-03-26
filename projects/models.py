from __future__ import unicode_literals
from django.db import models
from django.utils import timezone


# Create your models here.
class Project(models.Model):
    project_owner = models.ForeignKey('auth.User')
    project_title = models.CharField(max_length=50)
    short_pitch = models.TextField()
    created_date = models.DateTimeField(blank=True, null=True)

