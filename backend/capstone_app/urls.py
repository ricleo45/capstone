from django.urls import path
from capstone_app import views

urlpatterns = [
    path('list', views.customer_list),
    path('add', views.add_new_customer)
]
