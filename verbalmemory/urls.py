from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.render_verbalmemory),
    path('verbalmemory/', views.save_verbalmemory_score, name='save_verbalmemory_score'),
]