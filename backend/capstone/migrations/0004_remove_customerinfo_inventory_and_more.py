# Generated by Django 4.1.2 on 2022-11-12 23:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0003_alter_customerinfo_schedule_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customerinfo',
            name='inventory',
        ),
        migrations.RemoveField(
            model_name='customerinfo',
            name='payment_sum',
        ),
    ]