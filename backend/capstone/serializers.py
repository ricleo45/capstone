from rest_framework import serializers
from .models import CustomerInfo


class CustomerInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomerInfo
        fields = ['user', 'phone_number', 'schedule_date', 'payment_form',
                  'payment_ammount', 'service_type', 'transaction_id', 'inventory', 'payment_sum']
        depth = 1


class CalendarInfoSet(serializers.ModelSerializer):
    class Meta:
        model = CustomerInfo
        fields = ['schedule_date']
        depth = 1
