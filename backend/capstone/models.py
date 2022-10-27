from django.db import models
from authentication.models import User

class CustomerInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    phone_number = models.IntegerField()
    schedule_date = models.IntegerField()
    payment_form = models.CharField(max_length=255)
    payment_ammount = models.DecimalField(max_digits=5, decimal_places=2)
    service_type = models.CharField(max_length=255)
    transaction_id = models.IntegerField()
    inventory = models.CharField(max_length=255)
    payment_sum = models.IntegerField()



