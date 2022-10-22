from rest_framework import serializers
from .models import CustomerInfo

class CustomerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerInfo
        fields = ['id','email', 'first_name', 'last_name', 'phone_number', 'schedule_date', 'payment_form', 'payment_ammount', 'service_type', 'transaction_id']
        depth = 1

