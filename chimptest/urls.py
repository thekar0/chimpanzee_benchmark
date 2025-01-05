from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.render_chimptest),
    path('chimptest/', views.finish_quiz_view, name='save_score'),
]