# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-04-07 14:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0003_auto_20170406_1809'),
    ]

    operations = [
        migrations.CreateModel(
            name='Registered',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('category', models.CharField(max_length=50)),
            ],
        ),
    ]
