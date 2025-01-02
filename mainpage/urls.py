from django.urls import path
from . import views

urlpatterns = [
    path('mainpage/', views.say_hello) #The path to the home page now looks like this: http://127.0.0.1:8000/mainpage/homepage/
]