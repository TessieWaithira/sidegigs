# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2017-04-06 18:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20170405_0501'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.AddField(
            model_name='project',
            name='project_category',
            field=models.CharField(default='SOME STRING', max_length=50),
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
