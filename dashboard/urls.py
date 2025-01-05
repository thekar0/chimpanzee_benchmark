from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.render_dashboard) #The path to the home page now looks like this: http://127.0.0.1:8000/dashboard/
]