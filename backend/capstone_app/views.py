from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomerInfo
from .serializers import CustomerInfoSerializer




@api_view(['GET'])
def customer_list(request):
    customer = CustomerInfo.objects.all()
    serializer = CustomerInfoSerializer(customer, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_new_customer(request):
    if request.method == 'POST':
        serializer = CustomerInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    




