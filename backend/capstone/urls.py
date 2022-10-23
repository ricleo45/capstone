from django.urls import path
from . import views

urlpatterns = [
    path('list', views.customer_list),
    path('add', views.add_new_customer)
]
