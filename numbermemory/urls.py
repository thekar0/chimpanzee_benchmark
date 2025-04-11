from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.render_numbermemory),
    path('numbermemory/', views.save_numbermemory_score, name='save_numbermemory_score'),
]