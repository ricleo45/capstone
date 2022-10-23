from django.db import models
from authentication.models import User

class CustomerInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    email = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.IntegerField()
    schedule_date = models.IntegerField()
    payment_form = models.CharField(max_length=255)
    payment_ammount = models.DecimalField(max_digits=5, decimal_places=2)
    service_type = models.CharField(max_length=255)
    transaction_id = models.IntegerField()

# class LogisticsInfo(models.Model):
#     inventory_add = models.CharField(max_length=255)
#     inventory_remove = models.CharField(max_length=255)


