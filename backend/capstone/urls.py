from django.urls import path
from . import views

urlpatterns = [
    path('ls', views.customer_list),
    path('core', views.add_new_customer),
]
