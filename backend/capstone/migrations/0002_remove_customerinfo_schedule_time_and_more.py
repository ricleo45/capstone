# Generated by Django 4.1.2 on 2022-11-06 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customerinfo',
            name='schedule_time',
        ),
        migrations.AlterField(
            model_name='customerinfo',
            name='schedule_date',
            field=models.DateTimeField(),
        ),
    ]