# Generated by Django 4.1.2 on 2022-10-27 00:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0002_customerinfo_inventory_customerinfo_payment_sum'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customerinfo',
            name='email',
        ),
        migrations.RemoveField(
            model_name='customerinfo',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='customerinfo',
            name='last_name',
        ),
    ]
