
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import CustomerInfo
from .serializers import CustomerInfoSerializer




@api_view(['GET'])
@permission_classes([AllowAny])
def customer_list(request):
    customer = CustomerInfo.objects.all()
    serializer = CustomerInfoSerializer(customer, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def add_new_customer(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CustomerInfoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        customer = CustomerInfo.objects.filter(user_id=request.user.id)
        serializer = CustomerInfoSerializer(customer, many=True)
        return Response(serializer.data)

    


