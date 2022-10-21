from django.db import models

class CustomerInfo(models.Model):
    email = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_number = models.IntegerField()
    schedule_date = models.IntegerField()
    payment_form = models.CharField(max_length=255)
    payment_ammount = models.DecimalField(max_digits=5, decimal_places=2)
    service_type = models.CharField(max_length=255)

# class LogisticsInfo(models.Model):
#     transaction_id = models.IntegerField()
#     inventory_add = models.CharField(max_length=255)
#     inventory_remove = models.CharField(max_length=255)



